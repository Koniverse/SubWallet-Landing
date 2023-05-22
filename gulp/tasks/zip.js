'use strict';
var gulp  = require( 'gulp' ),
    $     = require( 'gulp-load-plugins' )(),
    time  = require( 'dateformat' )( new Date(), 'yyyy-mm-dd_HH-MM' ),
    paths = require( '../paths' );

// Zip main theme.
gulp.task( 'zip', function() {
	return gulp.src( paths.root.main + '**', { base: 'src/' } )
	           .pipe( $.zip( paths.mainTheme + '_' + time + '.zip' ) )
	           .pipe( gulp.dest( 'dist/themes/' ) );
} );
