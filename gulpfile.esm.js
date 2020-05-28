import autoprefixer from "gulp-autoprefixer";
import babelify from "babelify";
import browserify from "browserify";
import browserSync from "browser-sync";
import buffer from "vinyl-buffer";
import cleanCSS from "gulp-clean-css";
import del from "del";
import gulp from "gulp";
import rename from "gulp-rename";
import sass from "gulp-sass";
import sourcemaps from "gulp-sourcemaps";
import source from "vinyl-source-stream";

/**
 * Paths object
 */
const paths = {
    styles: {
        main: "src/scss/style.scss",
        src: "src/scss/**/*.scss",
        dest: "dist/",
    },
    scripts: {
        main: "src/js/LibName.js",
        src: "src/js/**/*.js",
        dest: "dist/",
    },
    markup: {
        src: "**/*.html",
    },
    includes: {
        node_modules: ["./node_modules"],
    },
};

/**
 * browserSync create
 */
const server = browserSync.create();

/**
 * Clean dist task
 */
export const clean = () => del(["dist"]);

/**
 * Watch SCSS task
 */
export function watchStyles() {
    return gulp.src(paths.styles.src)
        .pipe(sourcemaps.init())
        .pipe(sass({includePaths: paths.includes.node_modules}))
        .pipe(sass().on("error", sass.logError))
        .pipe(autoprefixer())
        .pipe(sourcemaps.write("./"))
        .pipe(gulp.dest(paths.styles.dest))
        .pipe(server.stream());
}

/**
 * Build SCSS task
 */
export function buildStyles() {
    return gulp.src(paths.styles.src)
        .pipe(sass({includePaths: paths.includes.node_modules}))
        .pipe(sass().on("error", sass.logError))
        .pipe(autoprefixer())
        .pipe(cleanCSS({level: {1: {specialComments: 0}}}))
        .pipe(rename({
            basename: "style",
        }))
        .pipe(gulp.dest(paths.styles.dest));
}

/**
 * Reload task
 */
export function reload(done) {
    server.reload();
    done();
}

/**
 * Server init task
 */
export function serve(done) {
    server.init({
        server: {
            baseDir: "./"
        },
        notify: false,
        port: 8080,
        injectChanges: true
    });
    done();
}

/**
 * File watcher
 */
export function watchFiles() {
    gulp.watch(paths.styles.src, gulp.series(watchStyles));
    gulp.watch(paths.markup.src, reload);
}

/**
 * Watch task
 */
const watch = gulp.series(clean, watchStyles, serve, watchFiles);

/**
 * Build task
 */
export const build = gulp.series(clean, buildStyles);

/**
 * Default task
 */
export default watch;
