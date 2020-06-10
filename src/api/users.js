const route = require('express').Router()
const User = require('../db/model').User

// route.get('/', (req, res) => {
//     User.findAll()
//         .then((users) => {
//             res.status(200).send(users)
//         })
//         .catch((err) => {
//             res.status(500).send(err)
//             console.error(err)
//         })
// })

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