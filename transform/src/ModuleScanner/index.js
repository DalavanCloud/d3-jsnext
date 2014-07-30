var esprima = require( 'esprima' ),
	shouldExport = require( '../shouldExport' ),
	groupByIdentifier = require( '../groupByIdentifier' ),

	preprocess = require( './preprocess' ),
	process = require( './process' );

var ModuleScanner = function ( src, filepath ) {

	var scanner = this;

	// Remove smash import declarations, and remove whitespace
	this.src = src.replace( /^import .+/gm, '' ).trim();

	// Attempt to parse with esprims
	try {
		this.ast = esprima.parse( this.src );
	} catch ( err ) {
		console.log( 'error parsing ' + filepath + ': ' + err.message );
		throw err;
	}

	this.filepath = filepath;
	this.shared = [];
	this.dependencies = [];
	this.helpers = [];
	this.exports = [];
	this.scopeDepth = 0;
	this.scopes = [{ used: [], defined: [], parent: null }];
	this.definedInModule = null; // fill in on leaving Program node
	this.externalRefs = [];
	this._scopesToCheck = [];

	// We need to unroll complex variable declarations, otherwise
	// we'll be in a world of hurt later
	preprocess( this.ast );
	process( this.ast, this );

	// See which variables were used but not declared...
	this._scopesToCheck.forEach( function ( scope ) {
		scope.used.forEach( function ( name ) {
			if ( !scanner.checkIfDefined( scope, name ) && !~scanner.externalRefs.indexOf( name ) ) {
				scanner.externalRefs.push( name );
			}
		});
	});

	// TODO tidy up...
	this.dependencies = this.externalRefs;
	this.exports = this.definedInModule.filter( function ( name ) {
		return /^d3\./.test( name );
	});
	this.helpers = this.definedInModule.filter( function ( name ) {
		return !/^d3\./.test( name );
	});
};

ModuleScanner.prototype = {
	enterScope: function () {
		this.scopes.push({
			used: [],
			defined: [],
			parent: this.scope()
		});

		this.scopeDepth += 1;
	},

	leaveScope: function () {
		var scope = this.scopes.pop();

		// If any d3 identifiers/keypaths were used in this scope,
		// we need to check later whether they were defined at
		// in a parent scope
		if ( scope.used.length ) {
			this._scopesToCheck.push( scope );
		}

		this.scopeDepth -= 1;
	},

	scope: function () {
		return this.scopes[ this.scopes.length - 1 ];
	},

	isDefined: function ( varName ) {
		var i = this.scopes.length, scope;

		while ( i-- ) {
			scope = this.scopes[i];
			if ( ~scope.defined.indexOf( varName ) ) {
				return true;
			}
		}

		return false;
	},

	definedInScope: function ( name ) {
		var defined = this.scope().defined;

		if ( groupByIdentifier.hasOwnProperty( name ) && ( group = groupByIdentifier[ name ] ) && !~this.shared.indexOf( group ) ) {
			this.shared.push( group );
		}

		if ( shouldExport( name ) && !~defined.indexOf( name ) ) {
			defined.push( name );
		}
	},

	usedInScope: function ( name ) {
		var used = this.scope().used;

		if ( groupByIdentifier.hasOwnProperty( name ) && ( group = groupByIdentifier[ name ] ) && !~this.shared.indexOf( group ) ) {
			this.shared.push( group );
		}

		if ( shouldExport( name ) && !~used.indexOf( name ) ) {
			used.push( name );
		}
	},

	checkIfDefined: function ( scope, name ) {
		var index = name.indexOf( '.' );

		if ( ~index ) {
			name = name.substr( 0, index );
		}

		do {
			if ( ~scope.defined.indexOf( name ) ) {
				return true;
			}
		} while ( scope = scope.parent );
	}
};


module.exports = ModuleScanner;