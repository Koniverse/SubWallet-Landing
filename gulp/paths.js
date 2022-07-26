'use strict';
var glob      = require( 'glob' ),
    mainTheme = 'docs';

module.exports = {
	mainTheme: mainTheme,
	root: {
		main: mainTheme + '/'
	},
	javascript: {
		src: mainTheme + '/assets/js-code/**/*.js',
		dist: mainTheme + '/assets/js/'
	},
	sass: {
		watch: [
			mainTheme + '/assets/scss/**/*.scss'
		],
		generate: [
			mainTheme + '/assets/scss/*.scss'
		],
		dist: mainTheme + '/assets/css/'
	},
	bs: {
		main: [
			mainTheme + '/*.html',
			mainTheme + '/assets/css/*.css',
			mainTheme + '/assets/js/*.js',
			mainTheme + '/assets/libs/**/**/*.js'
		]
	},
	linting: {
		js: mainTheme + '/assets/js-code/',
		scss: mainTheme + '/assets/scss/**/*.scss'
	}
};
