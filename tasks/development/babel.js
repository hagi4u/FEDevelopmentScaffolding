export default (gulp, plugins, config) => {
    const path = config.path;
    return () => {
        gulp.src(path.src+path.babelFileSrc)
            .pipe(plugins.sourcemaps.init())
            .pipe(plugins.babel())
            .pipe(plugins.sourcemaps.write('./'))
            .pipe(gulp.dest(path.src+path.jsSrc))
    }
};