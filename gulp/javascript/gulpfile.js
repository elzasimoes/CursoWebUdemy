const gulp = require('gulp')
const concat = require('gulp-concat')
const uglifly = require('gulp-uglify')
const babel = require('gulp-babel')

gulp.task('default', () =>{
    return gulp.src('src/**/*.js')
        .pipe(babel({
            coments: false,
            presets: ["env"]
        }))
        .pipe(uglifly())
        .on('error', function (err) { console.log(err) })
        .pipe(concat('condigo.min.js'))
        .pipe(gulp.dest('build'))
})
