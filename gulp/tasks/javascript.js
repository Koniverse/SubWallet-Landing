'use strict';
var gulp        = require( 'gulp' ),
    $           = require( 'gulp-load-plugins' )(),
    dist        = require( '../paths' ).javascript.dist,
    config      = require( '../config.json' ),
    log         = require( 'fancy-log' ),
    reportError = require( '../report-bug' ),
    list        = config.compileMinifyJS;

gulp.task( 'javascript', function() {
	var results,
	    min       = '.min',
	    extension = '.js';
	list.forEach( function( item ) {
		if ( item.bothVersion ) {

			// Minify version.
			results = gulp.src( item.files )
			              .pipe( $.plumber( { errorHandler: reportError } ) )
			              .pipe( $.sourcemaps.init() )
			              .pipe( $.concat( item.name + min + extension ) )
			              .pipe( $.uglify() )
			              .on( 'error', function( err ) {
				              log.error( err.toString() );
				              this.emit( 'end' );
			              } )
			              .pipe( $.sourcemaps.write( '/sourcemap', {
				              addComment: false
			              } ) )
			              .pipe( gulp.dest( dist ) );

			// Normal version.
			results = gulp.src( item.files )
			              .pipe( $.plumber( { errorHandler: reportError } ) )
			              .pipe( $.concat( item.name + extension ) )
			              .pipe( gulp.dest( dist ) );
		} else {
			if ( item.minify ) {
				results = gulp.src( item.files )
				              .pipe( $.plumber( { errorHandler: reportError } ) )
				              .pipe( $.sourcemaps.init() )
				              .pipe( $.concat( item.name + min + extension ) )
				              .pipe( $.uglify() )
				              .on( 'error', function( err ) {
					              log.error( err.toString() );
					              this.emit( 'end' );
				              } )
				              .pipe( $.sourcemaps.write( '/sourcemap', {
					              addComment: false
				              } ) )
				              .pipe( gulp.dest( dist ) );
			} else {
				results = gulp.src( item.files )
				              .pipe( $.plumber( { errorHandler: reportError } ) )
				              .pipe( $.concat( item.name + extension ) )
				              .pipe( gulp.dest( dist ) );
			}
		}
	} );
	return results;
} );
