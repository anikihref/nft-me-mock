
import webpack from 'webpack-stream'


export const javascript = () => {
  return app.gulp.src(app.path.src.javascript, { sourcemaps: true })
    .pipe(webpack({
      mode: 'development',
      output: {
        filename: 'app.min.js'
      }
    }))
    .pipe(app.gulp.dest(app.path.build.javascript))
    .pipe(app.plugins.browsersync.stream())
}