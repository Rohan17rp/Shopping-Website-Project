const route = require('express').Router()

route.use('/products', require('./products')) //both post and get
route.use('/users', require('./users'))     //only post request
route.use('/login', require('./login'))     //only post request

exports = module.exports = {
    route
}