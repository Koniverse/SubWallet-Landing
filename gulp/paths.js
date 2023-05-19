'use strict';
var glob      = require( 'glob' ),
    files     = glob( 'src/*', { sync: true } ),
    mainTheme = files[ 0 ].replace( 'src/', '' );

module.exports = {
	mainTheme: mainTheme,
	taskDone: [
		'src/**/*.php',
		'gulp/**/*.js'
	],
	root: {
		main: 'src/' + mainTheme + '/'
	},
	javascript: {
		src: 'src/' + mainTheme + '/assets/js-code/**/*.js',
		dist: 'src/' + mainTheme + '/assets/js/'
	},
	sass: {
		watch: [
			'src/' + mainTheme + '/assets/scss/**/*.scss'
		],
		generate: [
			'src/' + mainTheme + '/assets/scss/*.scss'
		],
		dist: 'src/' + mainTheme + '/assets/css/'
	},
	bs: {
		main: [
			'src/' + mainTheme + '/*.html',
			'src/' + mainTheme + '/assets/css/*.css',
			'src/' + mainTheme + '/assets/js/*.js',
			'src/' + mainTheme + '/assets/libs/**/**/*.js'
		],
	},
	linting: {
		js: 'src/' + mainTheme + '/assets/js-code/',
		scss: 'src/' + mainTheme + '/assets/scss/**/*.scss',
	}
};
