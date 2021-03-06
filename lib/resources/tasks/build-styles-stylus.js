import gulp from 'gulp';
import changed from 'gulp-changed';
import sourcemaps from 'gulp-sourcemaps';
import stylus from 'gulp-stylus';
import project from '../aurelia.json';

export default function buildStyles() {
  return gulp.src(project.paths.styles)
    .pipe(changed(project.paths.output, {extension: '.css'}))
    .pipe(sourcemaps.init())
    .pipe(stylus())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(project.paths.output));
};
