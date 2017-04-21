//npm install gulp gulp-sass gulp-imagemin gulp.spritesmith --save
var gulp = require('gulp');
var spritesmith = require('gulp.spritesmith');
 
gulp.task('default', function () {
  var spriteData = gulp.src('./public/images/Z/icon/*.png').pipe(spritesmith({
    imgName: 'sprite.png',
    cssName: 'sprite.css'
  }));
  return spriteData.pipe(gulp.dest('./public/images/Z/outIcon'));
});