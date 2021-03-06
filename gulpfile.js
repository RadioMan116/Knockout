/*
 *
 * Определяем переменные
 *
 */

var gulp = require('gulp'), // Сообственно Gulp JS
	uglify = require('gulp-uglify'), // Минификация JS
	concat = require('gulp-concat'), // Склейка файлов
	imagemin = require('gulp-imagemin'), // Минификация изображений
	csso = require('gulp-csso'), // Минификация CSS
	sass = require('gulp-sass'); // Конверстация SASS (SCSS) в CSS
var less = require('gulp-less');
var path = require('path');

/*
 *
 * Создаем задачи (таски)
 *
 */

// Задача "sass". Запускается командой "gulp sass"
// gulp.task('sass', function () {
// 	gulp.src('./assets/styles/**/*') // файл, который обрабатываем
// 		.pipe(sass().on('error', sass.logError)) // конвертируем sass в css
// 		.pipe(csso()) // минифицируем css, полученный на предыдущем шаге
// 		.pipe(gulp.dest('./assets/css/')); // результат пишем по указанному адресу
// });

// gulp.task('less', function () {
// 	gulp.src('./assets/styles/**/*') // файл, который обрабатываем
// 		.pipe(less().on('error', less.logError)) // конвертируем sass в css
// 		.pipe(csso()) // минифицируем css, полученный на предыдущем шаге
// 		.pipe(gulp.dest('./assets/css/')); // результат пишем по указанному адресу
// });

gulp.task('less', function () {
	return gulp.src('./assets/**/*.less')
		.pipe(less({
			paths: [path.join(__dirname, 'less', 'includes')]
		}))
		.pipe(csso())
		.pipe(gulp.dest('./assets/css/'));
});

// Задача "js". Запускается командой "gulp js"
gulp.task('js', function () {
	gulp.src([
			// './assets/javascripts/jquery-2.1.4.js',
			// './assets/javascripts/bootstrap.js',
			// './assets/javascripts/class-work.js',
			// './assets/javascripts/wome-work.js',
			// './assets/javascripts/script.js',
			'./assets/javascripts/*.js'
		]) // файлы, которые обрабатываем
		.pipe(concat('min.js')) // склеиваем все JS
		// .pipe(uglify()) // получившуюся "портянку" минифицируем
		.pipe(gulp.dest('./assets/js/')) // результат пишем по указанному адресу
});

// Задача "images". Запускается командой "gulp images"
gulp.task('images', function () {
	gulp.src('.assets/images/**/*') // берем любые файлы в папке и ее подпапках
		.pipe(imagemin()) // оптимизируем изображения для веба
		.pipe(gulp.dest('./assets/img/')) // результат пишем по указанному адресу

});

// Задача "watch". Запускается командой "gulp watch"
// Она следит за изменениями файлов и автоматически запускает другие задачи
gulp.task('watch', function () {
	// При изменение файлов *.scss в папке "styles" и подпапках запускаем задачу sass
	gulp.watch('./assets/styles/**/*.scss', ['sass']);
	// При изменение файлов *.js папке "javascripts" и подпапках запускаем задачу js
	gulp.watch('./assets/javascripts/**/*.js', ['js']);
	// При изменение любых файлов в папке "images" и подпапках запускаем задачу images
	gulp.watch('./assets/images/**/*', ['images']);

	gulp.watch('./assets/styles/**/*.less', ['less']);
});
