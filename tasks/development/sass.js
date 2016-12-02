export default (gulp, plugins, config) => {
    return () => {
        let path = config.path;

        return gulp.src(path.src+path.sassFileSrc)
            .pipe(plugins.sass())
            .pipe(plugins.sourcemaps.init())
            .pipe(plugins.autoprefixer({
                browsers: ['> 1%', 'IE 8'],
                cascade: false
            }))
            .pipe(plugins.sourcemaps.write('.'))
            .pipe(gulp.dest(path.src+path.cssSrc));
    }
};