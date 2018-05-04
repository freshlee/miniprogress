var webpackDevMiddleware = require("webpack-dev-middleware")
var webpack = require("webpack")
var Express = require('express')

const app = new Express()

var compiler = webpack({
    // configuration
    output: { path: '/' }
})

app.use(compiler)