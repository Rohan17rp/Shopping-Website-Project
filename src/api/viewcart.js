const route = require('express').Router()
const Order = require('../db/model').Order

route.post('/', function (req, res) {
    Order.findAll({
        where: {
            userId: req.body.userId
        }
    }).then((cart) => {
        res.send(cart)
    }).catch((err) => {
        res.send('invalid')
        console.error(err)
    })
})

exports = module.exports = route