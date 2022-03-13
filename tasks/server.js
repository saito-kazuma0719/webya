const browserSync = require('browser-sync')

const server = browserSync.create()

/**
 * 開発用サーバ再起動
 */
function reload (done) {
  server.reload()
  done()
}

/**
 * 開発用サーバ起動
 */
 function serve (done) {
  server.init({
    proxy : "webya.local",  // 変更
    notify: false,
    open: "external",
  })
  done()
}


module.exports = {
  reload,
  serve
}