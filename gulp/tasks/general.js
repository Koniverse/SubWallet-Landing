'use strict';
var gulp = require( 'gulp' ),
    $    = require( 'gulp-load-plugins' )(),
    task = require( '../paths' ).taskDone;

// Check the size of all files in dist folder
gulp.task( 'size', function() {
	return gulp.src( 'dist/**/*.zip' )
	           .pipe( $.size( {
		           pretty: true,
		           showFiles: true
	           } ) )
} );

// Generate list of task need to done before release theme
gulp.task( 'todo', function() {
	return gulp.src( task )
	           .pipe( $.todo( { verbose: true } ) )
	           .pipe( gulp.dest( './' ) );
} );
