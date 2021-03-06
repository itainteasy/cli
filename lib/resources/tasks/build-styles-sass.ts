import * as gulp from 'gulp';
import * as changed from 'gulp-changed';
import * as sourcemaps from 'gulp-sourcemaps';
import * as sass from 'gulp-sass';
import * as project from '../aurelia.json';

export default function buildStyles() {
  return gulp.src(project.paths.styles)
    .pipe(changed(project.paths.output, {extension: '.css'}))
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(project.paths.output));
};
