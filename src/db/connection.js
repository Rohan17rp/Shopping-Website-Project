const Sequelize = require('sequelize')

const db = new Sequelize('shopproject', 'shopadmin', 'shoppass', {
    host: 'localhost',
    dialect: 'mysql'
})

db.authenticate()
    .then(() => console.log('Connection worked'))
    .catch((err) => console.error(err))

module.exports = {
    db
}