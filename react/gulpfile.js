var gulp = require("gulp"),
    less = require("gulp-less"),
    browserSync = require("browser-sync"),
    autoprefixer = require('gulp-autoprefixer'),
    place='form',
    pathCSS = place+"/css/",
    path = { 
        html : place+"/*.html",
        less : place+"/less/*.less",
        css : place+"/css/*.css",
        js : place+"/js/*.js"
    };

gulp.task("serve", ["less"], function() {
    gulp.watch(path.less, ["less"]);
    browserSync.init([path.html,path.css,path.js],{ 
        server: {
         proxy: "localhost/DEMO/"
      }
    });
    // gulp.watch(path.css, ["css"]);
    // gulp.watch(path.less, ["less"]);
    // gulp.watch(path.js, ["js-watch"]);
    // gulp.watch(path.html, ["html"]);
    // gulp.watch([path.html,path.css,path.less,path.js]).on("change", function() {
    //     browserSync.reload; 
    // });
});
gulp.task('browser-sync', function () {
   var files = [
      'form/*.html',
      'form/css/**/*.css',
      'form/js/*.js'
   ];
   browserSync.init(files, {
      server: {
         proxy: "localhost/DEMO/"
      }
   });
});


gulp.task("less", function() {
    gulp.src(path.less)
        .pipe(less())
        .pipe(autoprefixer({
            // browsers: ['Chrome 40','iOS 7','Android 2.3','Safari 8']
            browsers: ['last 2 versions']
        }))
        .pipe(gulp.dest(pathCSS))
        .pipe(browserSync.stream(true));
})

gulp.task("js-watch", function() {
    gulp.src(path.js)
    .pipe(browserSync.stream(true));
})

gulp.task("html", function() {
    gulp.src(path.html)
    .pipe(browserSync.stream(true));
})
gulp.task("css", function() {
    gulp.src(pathCSS)
    .pipe(browserSync.stream(true));
})
gulp.task("default", ["serve"])
