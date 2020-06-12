const route = require('express').Router()
const User = require('../db/model').User

route.get('/', (req, res) => {
    console.log('In users get method')
    console.log(req)
    User.findOne({
        where: {
            username: req.query.username
        }
    }).then((user) => {
        console.log('in users.js ' + user)
        // let uid = user.id
        console.log(user.id)
        console.log(user.id.value)
        res.send(user)
    }).catch((err) => {
        res.send('Invalid')
    })
})

route.post('/', (req, res) => {
    User.create({
        name: req.body.name,
        username: req.body.username,
        password: req.body.password
    }).then((user) => {
        res.send(user)
    }).catch((err) => {
        res.send('invalid')
        // console.error(err)
    })
})

exports = module.exports = route