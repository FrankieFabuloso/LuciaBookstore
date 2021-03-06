const express = require('express')
const path = require('path')
const favicon = require('serve-favicon')
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser')
const app = express()

// --- ROUTES ----
const index = require('./src/routes/index')
const shop = require('./src/routes/shop')
const admin = require('./src/routes/admin')

// view engine setup
app.set('views', path.join(__dirname, 'src/views'))
app.set('view engine', 'pug')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cookieParser())
// app.use(require('node-sass-middleware')({
//   src: path.join(__dirname, 'public'),
//   dest: path.join(__dirname, 'public'),
//   indentedSyntax: true,
//   sourceMap: true
// }))
app.use(express.static(path.join(__dirname, 'public')))

app.use( '/', index )
app.use( '/admin', admin )
app.use( '/shop', shop )

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  const err = new Error('Not Found')
  err.status = 404
  next(err)
})

// error handler
app.use(function(err, req, res, next) {
  // console.log( '-------', err )
  // set locals, only providing error in development
  res.locals.message = err.message
  res.locals.error = req.app.get('env') === 'development' ? err : {}

  // render the error page
  res.status(err.status || 500)
  res.render('error/error.pug')
})

module.exports = app
