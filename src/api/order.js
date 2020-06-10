const route = require('express').Router()
const Order = require('../db/model').Order

route.get('/', (req, res) => {
    Order.findAll()
        .then((order) => {
            res.status(200).send(order)
        })
        .catch((err) => {
            console.error(err)
        })
})

route.post('/',(req,res)=>{
    Order.create({

    }).then((order) => {
        res.status(201).send(order)
    }).catch((err) => {
        console.error(err)
    })
})

exports=module.exports=route