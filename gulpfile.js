const { src, dest, task, watch, series, parallel } = require('gulp');
const webpack = require('webpack');

// Utility plugins
var rename = require('gulp-rename');
var sourcemaps = require('gulp-sourcemaps');
var plumber = require('gulp-plumber');
var gulpif = require('gulp-if');
var replace = require('gulp-replace');
const del = require('del');
var notify = require('gulp-notify');
var options = require('gulp-options');
const { argv } = require('yargs');

// CSS related plugins
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
const cssnano = require('cssnano');
const postcss = require('gulp-postcss');

// JS related plugins
var uglify = require('gulp-uglify');
var babelify = require('babelify');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var stripDebug = require('gulp-strip-debug');
const concat = require('gulp-concat');

// Browers related plugins & functions
var browserSync = require('browser-sync').create();

async function allBrowsers() {
    browserChoice = [`safari`, `firefox`, `google chrome`, `opera`, `microsoft-edge`];
}

// File paths
const mapURL = './';
const fileSrc = {
    styleSrc: './src/assets/scss/styles.scss',
    jsSrc: './src/',
    jsFile: 'main.js',
    imgSrc: './src/assets/img/**/*',
    fontsSrc: './src/fonts/**/*',
    htmlSrc: './src/**/*.html'
};

// Watch file paths
const watchFiles = {
    styleWatch: './src/assets/scss/**/*.scss',
    jsWatch: './src/**/*.js',
    imgWatch: './src/assets/img/**/*.*',
    fontsWatch: './src/assets/fonts/**/*.*',
    htmlWatch: './src/**/*.html'
};

// Public compiled destination paths
const publicDist = {
    styleURL: './dist/css/',
    jsURL: './dist/js/',
    imgURL: './dist/img/',
    fontsUrl: './dist/fonts/',
    htmlURL: './dist/'
};
const jsFiles = [fileSrc.jsFile];

/**
 * Webpack
 */
// Environments compilation options for webpack
process.env.NODE_ENV = argv.production || 'development';
const webpackConfig =
    process.env.NODE_ENV === 'production' ? './webpack.config.prod.js' : './webpack.config.js';

// Run to compile the script into a bundle
function compile(done) {
    return new Promise((resolve, reject) => {
        webpack(require(webpackConfig), (err, stats) => {
            if (err) {
                return reject(err);
            }

            if (stats.hasErrors()) {
                return reject(new Error(stats));
            }
            resolve();
        });
    });
}

/**
 * BrowserSync Functions for browser live-reloading, watching file changes and auto compile on save.
 */
function browser_sync(done) {
    browserSync.init({
        server: {
            baseDir: './dist',
            index: 'index.html'
        },
        port: 4200,
        done
    });
}

function reload(done) {
    browserSync.reload();
    done();
}

/**
 * Utility Functions - Cleaning, etc.
 */
function clean(done) {
    // Clean the dist folder
    del.sync([publicDist.htmlURL]);

    // Signal completion
    return done();
}

/**
 * Styles - Custom styles, vendor styles, different handling based on envs for dev or prod.
 */
function styles(done) {
    src([fileSrc.styleSrc])
        .pipe(sourcemaps.init())
        .pipe(
            sass({
                errLogToConsole: true,
                outputStyle: 'compressed'
            })
        )
        .on('error', console.error.bind(console))
        .pipe(autoprefixer({ overrideBrowserslist: ['last 2 versions', '> 5%', 'Firefox ESR'] }))
        .pipe(rename({ suffix: '.min' }))
        .pipe(sourcemaps.write(mapURL))
        .pipe(dest(publicDist.styleURL))
        .pipe(browserSync.stream());
    done();
}

/**
 * Scripts - Custom scripts, vendor scripts, different handling based on envs for dev or prod.
 */
function js(done) {
    jsFiles.map(function(entry) {
        return browserify({
                entries: [fileSrc.jsSrc + entry]
            })
            .transform(babelify, { presets: ['@babel/preset-env'] })
            .bundle()
            .pipe(source(entry))
            .pipe(
                rename({
                    extname: '.js'
                })
            )
            .pipe(buffer())
            .pipe(gulpif(options.has('production'), stripDebug()))
            .pipe(sourcemaps.init({ loadMaps: true }))
            .pipe(gulpif(options.has('production'), uglify()))
            .pipe(sourcemaps.write('.'))
            .pipe(dest(publicDist.jsURL))
            .pipe(browserSync.stream());
    });
    done();
}

/**
 * HTML & Assets (fonts, images).
 */
function triggerPlumber(src_file, dest_file) {
    return src(src_file)
        .pipe(plumber())
        .pipe(dest(dest_file));
}

function images() {
    return triggerPlumber(fileSrc.imgSrc, publicDist.imgURL);
}

function fonts() {
    return triggerPlumber(fileSrc.fontsSrc, publicDist.fontsURL);
}

function html() {
    return triggerPlumber(fileSrc.htmlSrc, publicDist.htmlURL);
}

/**
 * Watching
 */
function watch_files(done) {
    watch(watchFiles.styleWatch, series(styles, reload));
    watch(watchFiles.jsWatch, series(js, reload));
    watch(watchFiles.imgWatch, series(images, reload));
    watch(watchFiles.fontsWatch, series(fonts, reload));
    watch(watchFiles.htmlWatch, series(html, reload));
    src(publicDist.jsURL + 'main.js').pipe(notify({ message: 'Gulp is Watching, Happy Coding!' }));
}

/**
 * Build for production
 */

/**
 * Tasks from previous functions
 */
task('clean', clean);
task('styles', styles);
task('js', js);
task('images', images);
task('fonts', fonts);
task('html', html);
exports.dev = parallel(browser_sync, watch_files);
exports.default = series(clean, js, styles, html, compile);