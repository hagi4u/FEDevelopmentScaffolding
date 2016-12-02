'use strict';

/**
 * Import to Plugins
 */
import gulp from 'gulp';
import plugins from 'gulp-load-plugins';

/**
 * Import to Configuration & Tasks
 */
import config from './tasks/config';
import development from './tasks/development';
import labs from './tasks/labs';

// Default Task (Try to make manual)
gulp.task('default', ()=>{
    console.log('show the manual');
});

// #01 Run Development Tasks
development(gulp, plugins(), config);

// #99 Run Lab Tasks
labs(gulp, plugins(), config);