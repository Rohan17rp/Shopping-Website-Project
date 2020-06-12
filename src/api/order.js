const route = require('express').Router()
const Order = require('../db/model').Order

route.get('/', (req, res) => {
    Order.destroy({
        where: {
            id: req.query.orderId
        }
    }).then(() => {
        res.send('Deleted successfully')
    }).catch((err) => {
        console.error(err)
        res.send(err)
    })
})

route.post('/', (req, res) => {
    Order.create({
        userId: req.body.userId,
        productId: req.body.productId
    }).then((order) => {
        res.status(201).send(order)
    }).catch((err) => {
        console.error(err)
    })
})

exports = module.exports = route