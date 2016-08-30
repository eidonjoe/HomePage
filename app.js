/* create by eidonjoe*/

var logger = require('koa-logger');
var route = require('koa-route');
var router = require('koa-router')();
var parse = require('co-body');
var koa = require('koa');
var routes = require('./router/index.js');
var app = module.exports = koa();
var env = process.env;
var port = env.PORT || 3000;
// middleware

app.use(logger());

// route middleware

app.use(route.get('/', routes.index));
app.use(route.get('/health', routes.health));
app.use(route.get('/json', routes.json));
app.use(route.post('/post', routes.post));
// listen

app.listen(port);
console.log('listening on port ' + port);