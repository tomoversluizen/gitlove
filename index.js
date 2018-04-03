'use strict'

// Modules die worden opgeroepen
var express = require('express')


//De server
express()
  .set('view engine', 'ejs')
  .set('views', 'views')
  .use(express.static('static'))
  .get('/', home)
  .get('/', detail)
  .use(notFound)
  .listen(1907)

console.log('Port 1907 available')

function home(req, res){
  res.render('list.ejs')
}

function detail(req, res){
  res.render('index.ejs')
}

function notFound(req, res) {
  res.status(404).render('error.ejs')
}
