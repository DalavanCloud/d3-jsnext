var astHelpers = require( '../../astHelpers' ),
	groupByIdentifier = require( '../../groupByIdentifier' );

module.exports = function ( node, parent, scanned ) {
	var left, right, keypath, group;

	left = node.left;
	right = node.right;

	// Property assignments to the d3 namespace (and children)
	if ( left.type === 'MemberExpression' ) {
		keypath = astHelpers.getKeypath( left );
		scanned.definedInScope( keypath );

		/*if ( !keypath ) {
			return;
		}

		if ( group = groupByIdentifier[ keypath ] ) {
			scanned.addShared( group );
		}

		else {
			if ( /^d3\./.test( keypath ) && !~scanned.exports.indexOf( keypath ) ) {
				scanned.exports.push( keypath );
			}

			scanned.definedInScope( keypath );
		}*/
	}

	// Do we have a dependency?
	if ( right.type === 'MemberExpression' ) {
		keypath = astHelpers.getKeypath( right );
		scanned.usedInScope( keypath );
	}

	else if ( right.type === 'Identifier' ) {
		scanned.usedInScope( right.name );
	}
};
