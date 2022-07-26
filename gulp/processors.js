'use strict';
var mqpacker     = require( 'css-mqpacker' ),
    autoprefixer = require( 'autoprefixer' ),
    assets       = require( 'postcss-assets' ),
    pxtorem      = require( 'postcss-pxtorem' ),
    path         = require( './paths' ).root.main;

// Config PostCSS modules.
module.exports = {
	nano: {
		autoprefixer: false,
		zindex: false,
		reduceIdents: false,
		discardUnused: false,
		mergeIdents: false
	},
	modules: [
		autoprefixer( {
			browsers: [
				'last 2 versions',
				'> 1%',
				'ie >= 9',
				'ie_mob >= 10',
				'ff >= 30',
				'chrome >= 34',
				'safari >= 7',
				'opera >= 23',
				'ios >= 7',
				'android >= 4',
				'bb >= 10'
			]
		} ),
		assets( { loadPaths: [ path + 'assets/images/', 'data/' ] } )
	]
};
