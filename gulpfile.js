var gulp = require('gulp');
var sass = require('gulp-sass');
var input = "./public/scss/style.scss",
    output = "./public/css"
 sassOpt = {
    errLogToConsole:true,
    outputStyle: 'expanded'
    },
    autoprefixer = require('gulp-autoprefixer');
    var autoprefixerOptions = {
  browsers: ['last 2 versions', '> 5%', 'Firefox ESR']
};


gulp.task('default',['watch'])

gulp.task('sass', function () {
  return gulp
    .src(input)
    .pipe(sass(sassOpt).on('error', sass.logError))
    .pipe(autoprefixer(autoprefixerOptions))
    .pipe(gulp.dest(output));
});


gulp.task('watch', ['sass'], function(){

    return gulp
            .watch('./public/scss/*.scss',['sass'])
            .on('change', function(event){
                console.log(event.path+" has changed");
            });
})
