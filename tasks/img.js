import gulp from "gulp";

import notify from "gulp-notify";
import plumber from "gulp-plumber";
import imagemin from "gulp-imagemin";
import newer from "gulp-newer";
import webp from "gulp-webp";

import path from "./config/paths";
import app from "./config/app";

export default () => {
	return gulp.src(path.img.src)
	.pipe(plumber({
		errorHandler: notify.onError()
	}))
	.pipe(newer(path.img.dest))
	.pipe(webp())
	.pipe(gulp.dest(path.img.dest))
	.pipe(gulp.src(path.img.src))
	.pipe(newer(path.img.dest))
	.pipe(imagemin({
		progressive: true,
		svgoPlugins: [{ removeViewBox: false }],
		interlaced: true,
		optimizationLevel: 3
	}))
	.pipe(gulp.dest(path.img.dest))
	.pipe(gulp.src(path.img.svg))
	.pipe(gulp.dest(path.img.dest))
}