import browserSync from 'browser-sync';

export default (gulp, plugins, config) => {
    const path = config.path;
    const taskSrc = './development';

    const browserSyncInstance = browserSync.create();

    // Common Functions
    const getTask = function (task){
        return require(taskSrc+'/'+task).default(gulp, plugins, config);
    };

    // Thirdparty plugins (CSS Preprocessor / JS Transpiler)
    gulp.task('babel', getTask('babel'));
    gulp.task('sass', getTask('sass'));

    // Starting to development tasks
    gulp.task('develop', ['babel', 'sass'], () => {
        browserSyncInstance.init({
            server: path.src
        });
        
        gulp.watch(path.src+path.sassFileSrc, ['sass']);
        gulp.watch(path.src+path.babelFileSrc, ['babel']);

        // When was modified then reloading browsers (Finally Asset files)
        gulp.watch(path.src+'/*.html').on('change', browserSyncInstance.reload);
        gulp.watch(path.src+path.cssSrc+'/*.css').on('change', browserSyncInstance.reload);
        gulp.watch(path.src+path.jsFileSrc).on('change', browserSyncInstance.reload);

    });
    
    /* 
        여기서 각 Tasks 작성 

        1. usemin
        2. sass compiler            // OK
        3. babel compiler           // OK
        4. browser-sync             // OK
        5. image-min
        6. sprite-smith
        7. svg-icons
        8. jshint
        9. concat
        10. uglify
        11. sequence

    */

}