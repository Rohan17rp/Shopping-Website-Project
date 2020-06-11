const route = require('express').Router()
const Product = require('../db/model').Product

route.post('/', (req, res) => {
    Product.findOne({
        where: {
            id: req.body.id
        }
    }).then((product) => {
        res.send(product.dataValues)
    }).catch((err) => {
        res.status(503).send(err)
        console.error(err)
    })
})

exports = module.exports = route