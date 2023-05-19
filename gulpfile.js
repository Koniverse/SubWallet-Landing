'use strict';
var gulp = require( 'gulp' );

require( './gulp/tasks/linting' );
require( './gulp/tasks/general' );
require( './gulp/tasks/sass' );
require( './gulp/tasks/browser-sync' );
require( './gulp/tasks/javascript' );
require( './gulp/tasks/watch' );
require( './gulp/tasks/zip' );

gulp.task( 'default', gulp.series( 'todo', gulp.parallel( 'bs', 'sass', 'watch:main' ) ) );
