const route = require('express').Router()
const User = require('../db/model').User

function callback(req, res) {
    let password = req.body.password

    User.findOne({
        attributes: {
            password
        },
        where: {
            username: req.body.username
        }
    }).then((user) => {
        let correctPassword = user.dataValues.password
        if (password === correctPassword) {
            res.send(user.dataValues)
        } else {
            res.send('Incorrect username or password')
        }
    }).catch((err) => {
        // res.status(503).send(err)
        // console.error(err)
        res.send('Incorrect username or password')
    })
}

// callback({body: {password: 'westworld', username: 'dolores'}})

route.post('/', callback)

exports = module.exports = route