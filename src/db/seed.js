//This file is not directly called by any other file
// This file only generates some sample data which is used during the development phase
// This is not a part of the final project and is not executed in the final run
const {db} = require('./connection')
const {User, Product, Order} = require('./model')

const seed = async () => {
    try {
        db.sync()

        await User.create({
            id: 1,
            name: 'Tarun',
            username: 'tarunluthra',
            password: '123'
        })


        await Product.create({
            id: 1,
            name: '7 Pro',
            manufacturer: 'OnePlus',
            stockcount: 100,
            description: 'The 6.67 inch Fluid AMOLED display on the OnePlus 7 Pro is our most advanced screen ever. Experience unrivalled smoothness and clarity with a 90 Hz refresh rate and QHD+ resolution.',
            price: 42999,
            rating: 4
        })

        await Order.create({
            id: 1,
            userId: 1,
            productId: 1
        })

    } catch (err) {
        console.error(err)
    }
}

seed()