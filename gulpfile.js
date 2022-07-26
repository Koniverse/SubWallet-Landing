'use strict';
var gulp = require( 'gulp' );

require( './gulp/tasks/linting' );
require( './gulp/tasks/sass' );
require( './gulp/tasks/browser-sync' );
require( './gulp/tasks/javascript' );
require( './gulp/tasks/watch' );

gulp.task( 'default', gulp.series( gulp.parallel( 'bs', 'sass', 'watch:main' ) ) );
