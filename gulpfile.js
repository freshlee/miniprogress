var gulp = require('gulp')
var less = require('gulp-less')
var path = require('path')
var rename = require('gulp-rename')
var fs = require('fs')
var concat = require('gulp-concat')
let config = {
  root: 'client/pages'
}

gulp.task('less', function () {
  gulp.src('client/pages/**/*.less', {base: 'client/main.less'})
    .pipe(less())
    .pipe(rename(path => {
      path.extname = '.wxss'
    }))
    .pipe(gulp.dest('client/pages'))
})

gulp.task('testWatch', function(){
  gulp.watch('client/pages/**/*.less', ['less'])
})

gulp.task('init', function() {
  let loop = function (dir) {
    fs.readdir(dir, function (err, files) {
      files.map(file => {
        // console.log(file)
        var file_path = path.join(dir, file)
        fs.stat(file_path, (err, stat) => {
          var dirname = file
          if (stat.isDirectory()) {
            loop(file_path)
          }
        })
      })
      // files.map(item => {
      //   console.log(path.extname(item))
      // })
      let basename = files.find(item => Boolean(path.extname(item) === '.wxss'))
      if (basename && !files.find(item => Boolean(path.extname(item) === '.less'))) {
        console.log(path.join(dir, path.basename(basename, '.wxss') + '.less'))
        fs.writeFile(path.join(dir, path.basename(basename, '.wxss') + '.less'), '', (err) => {
          console.warn(err)
        })
      }
    })
  }
  loop(config.root)
})

gulp.task('default', ['testWatch', 'less', 'init'])