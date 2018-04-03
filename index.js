'use strict'

// Modules die worden opgeroepen
var express = require('express')


//De server
express()
  .set('view engine', 'ejs')
  .set('views', 'views')
  .use(express.static('static'))
  .listen(1907)

console.log('Port 1907 available')
