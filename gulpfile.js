const gulp = require('gulp');
const pug = require('gulp-pug');

gulp.task('pug', function() {
  return gulp.src('src/*.pug')
    .pipe(pug())
    .pipe(gulp.dest('dist'));
});

module.exports = function(grunt) {
    grunt.initConfig({
      pug: {
        compile: {
          options: {
            pretty: true
          },
          files: [
            {
              expand: true,
              cwd: 'src',
              src: '**/*.pug',
              dest: 'dist',
              ext: '.html'
            }
          ]
        }
      }
    });
  
    grunt.loadNpmTasks('grunt-pug');
  };