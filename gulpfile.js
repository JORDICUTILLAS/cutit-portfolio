var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer'); 

gulp.task('css', function(){
	return gulp.src('src/sass/styles.scss')
		.pipe(sass())
		.pipe(autoprefixer({ 
			browsers: ['last 2 versions',
            '>1%',
            'ie 9'
            ]
        }))
		.pipe(gulp.dest('dist/css'));	
});

gulp.task('default', ['css'], function(){
	gulp.watch('src/sass/**/*.scss',['css']);
});