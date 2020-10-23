const gulp = require('gulp');
const sourcemaps = require('gulp-sourcemaps');
const sass = require('gulp-sass');
const cleanCSS = require('gulp-clean-css');
const autoprefixer = require('gulp-autoprefixer');
const uglify = require('gulp-uglify');
const concat = require('gulp-concat');
const cssImporter = require('node-sass-css-importer')({
  import_paths: ['./scss'],
});

const gulpSass = () => gulp.src(['src/assets/scss/theme-event.scss'])
  .pipe(sourcemaps.init())
  .pipe(sass({
    importer: [cssImporter],
  }).on('error', sass.logError))
  .pipe(autoprefixer())
  .pipe(cleanCSS({ compatibility: 'ie8' }))
  .pipe(sourcemaps.write('.'))
  .pipe(gulp.dest('public/css'));

const gulpPlugins = () => gulp.src(['src/assets/plugins/*.js'])
  .pipe(uglify())
  .pipe(concat('plugins.min.js'))
  .pipe(gulp.dest('public/js'));

gulp.task('default', () => {
  gulp.watch('src/assets/scss/**/*.scss', { ignoreInitial: false }, gulpSass);
  gulp.watch('src/assets/plugins/*.js', { ignoreInitial: false }, gulpPlugins);
});
