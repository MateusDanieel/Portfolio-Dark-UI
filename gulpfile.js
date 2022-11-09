const gulp = require('gulp');

const browsersync = require('browser-sync').create();
const SSI = require('browsersync-ssi');

const postcss = require('gulp-postcss');
const atImport = require('postcss-import');
const cssnano = require('cssnano');
const autoprefixer = require('autoprefixer');
const precss = require('precss');
const concat = require('gulp-concat');
const lost = require('lost');
const uglify = require('gulp-uglify');

// BrowserSync
function browserSync(done) {
  browsersync.init({
    server: {
      baseDir: './docs/',
      index: './index.html'
    },
    ghostMode: true,
    port: 3000
  });
  done();
}

// BrowserSync Reload
function browserSyncReload(done) {
  browsersync.reload();
  done();
}

function css() {
  return gulp
    .src([
      './docs/src/scss/main.scss'
    ])
    .pipe(concat('style.min.css'))
    .pipe(postcss([atImport(), autoprefixer(), precss(), cssnano(), lost()]))
    .pipe(gulp.dest('./docs/dist/css'))
    .pipe(browsersync.stream());
}

// Transpile, concatenate and minify scripts
function scripts() {
  return (
    gulp.src([
      './docs/src/js/modernizr-3.11.2.js',
      './docs/src/js/plugins.js',
      './docs/src/js/jquery.js',
      './docs/src/js/jquery.i18n.js',
      './docs/src/js/jquery.i18n.messagestore.js',
      './docs/src/js/main.js',
      './docs/src/js/i18n.js'
    ])
      .pipe(concat('script.min.js'))
      .pipe(uglify())
      .pipe(gulp.dest('docs/dist/js'))
      .pipe(browsersync.stream()));
}

function watchFiles() {
  gulp.watch('./docs/src/scss/*.scss', css);

  gulp.watch([
    './docs/src/js/*.js',
  ], scripts);

  gulp.watch('./docs/*.html', browserSyncReload);
}

const js = gulp.series(scripts);
const build = gulp.series(css);
const watch = gulp.parallel(watchFiles, browserSync);

// export tasks
exports.css = css;
exports.js = js;
exports.build = build;
exports.watch = watch;

exports.default = watch;