var gulp = require("gulp"), // Load Gulp!
// Now that we've installed the uglify package we can require it:
uglify = require("gulp-uglify"),
  rename = require("gulp-rename"),
  eslint = require('gulp-eslint'),
  prettyError = require("gulp-prettyerror"),
  sass = require("gulp-sass"),
  autoprefixer = require("gulp-autoprefixer"),
  cssnano = require("gulp-cssnano"),
  rename = require("gulp-rename"),
  browserSync = require('browser-sync').create();

  gulp.task("scripts", function() {
  return gulp
    .src("./js/*.js") // What files do we want gulp to consume?
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(uglify()) // Call the uglify function on these files
    .pipe(rename({ extname: ".min.js" })) // Rename the uglified file
    .pipe(gulp.dest("./build/js")); // Where do we put the result?
});

gulp.task('sync', function() {
  browserSync.init({
      server: {
          baseDir: "./"
      }
  });
});
  


  gulp.task('watch', function() {  
     gulp.watch('./js/*.js./scss/*.scss', gulp.series('scripts', "sass", function () {browserSync.reload(); }));
     gulp.watch('./scss/*.scss', gulp.series( "sass", function () {browserSync.reload(); }));

});







gulp.task("sass", function() {
    return gulp
      .src("./sass/style.scss")
      .pipe(prettyError())
      .pipe(sass())
      .pipe(
        autoprefixer({
          browsers: ["last 2 versions"]
        })
      )
      .pipe(gulp.dest("./build/css"))
      .pipe(cssnano())
      .pipe(rename("style.min.css"))
      .pipe(gulp.dest("./build/css"));
  });

gulp.task('default', gulp.series('scripts', 'sass', 'sync'));