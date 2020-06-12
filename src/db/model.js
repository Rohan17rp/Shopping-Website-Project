const {db} = require('./connection')
const {DataTypes} = require('sequelize')

const User = db.define('users', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    username: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    }
})

const Product = db.define('products', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    manufacturer: {
        type: DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: true
    },
    stock: {
        type: DataTypes.INTEGER,
        default: 1
    },
    price: {
        type: DataTypes.FLOAT,
        default: 0.0
    },
    rating: {
        type: DataTypes.INTEGER,
        default: 5
    }
})

const Order = db.define('orders', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    }
})

Order.belongsTo(User)
Order.belongsTo(Product)

Product.hasMany(Order)
User.hasOne(Order)

db.sync()
    .then(() => console.log('Database has been synced'))
    .catch((err) => console.error('Error creating DB - ' + err))


exports = module.exports = {
    User, Product, Order
}