const route = require('express').Router()
const Product = require('../db/model').Product

route.get('/', (req, res) => {
    Product.findAll()
        .then((products) => {
            res.status(200).send(products)
        })
        .catch((err) => {
            console.error(err)
        })
})


route.post('/', (req, res) => {
    Product.create({
        name: req.body.name,
        manufacturer: req.body.manufacturer,
        stock: req.body.stock,
        description: req.body.description,
        price: req.body.price,
        rating: req.body.rating
    }).then((product) => {
        res.status(201).send(product)
    }).catch((err) => {
        console.error(err)
    })
})


exports = module.exports = route