var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
const imagemin = require('gulp-imagemin');
const pngquant = require('imagemin-pngquant');
var ghPages = require('gulp-gh-pages');
/*var validator = require('gulp-html');*/


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

gulp.task('image', () => {
	return gulp.src('src/img/*')
		.pipe(imagemin({
			progressive: true,
			svgoPlugins: [{removeViewBox: false}],
			use: [pngquant()]
		}))
		.pipe(gulp.dest('dist/img'));
});

gulp.task('deploy', function() {
  return gulp.src('./dist/**/*')
    .pipe(ghPages());
});

/*gulp.task('html', function() {
  return gulp.src('index.html')
  .pipe(validator())
  .pipe(gulp.dest('dist/'));
});*/

gulp.task('default', ['css'], function(){
	gulp.watch('src/sass/**/*.scss',['css']);
});