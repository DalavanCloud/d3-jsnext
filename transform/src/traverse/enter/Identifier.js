var shouldExport = require( '../../shouldExport' ),
	astHelpers = require( '../../astHelpers' ),
	groupByIdentifier = require( '../../groupByIdentifier' );

module.exports = function ( node, parent, state ) {
	var group;

	if ( groupByIdentifier.hasOwnProperty( node.name ) && ( group = groupByIdentifier[ node.name ] ) ) {
		if ( !~state.shared.indexOf( group ) ) {
			state.shared.push( group );
		}

		// Return a replacement node
		replacement = astHelpers.generateMemberExpression( group.name + '.' + node.name );
		replacement._isReplacement = true;
		return replacement;
	}

	else if ( shouldExport( node.name ) && !~state.dependencies.indexOf( node.name ) ) {
		state.dependencies.push( node.name );
	}
};