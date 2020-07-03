// This file is not directly called by any other file
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

        await User.create({
            id: 2,
            name: 'Mad man with a box',
            username: 'doctor',
            password: 'tardis'
        })


        await Product.create({
            id: 1,
            name: '7 Pro',
            manufacturer: 'OnePlus',
            stock: 100,
            description: 'The 6.67 inch Fluid AMOLED display on the OnePlus 7 Pro is our most advanced screen ever. Experience unrivalled smoothness and clarity with a 90 Hz refresh rate and QHD+ resolution.',
            price: 42999,
            rating: 4
        })

        await Product.create({
            id: 2,
            name: 'S10 Lite',
            manufacturer: 'Samsung',
            stock: 50,
            description: '8 GB RAM | 128 GB ROM | Expandable Upto 1 TB\n' +
                '17.02 cm (6.7 inch) Full HD+ Display\n' +
                '48MP + 12MP + 5MP | 32MP Front Camera\n' +
                '4500 mAh Lithium-ion Battery\n' +
                'Qualcomm Snapdragon 855 (SM8150) Processor'
            price: 42999,
            rating: 5
        })

        await Order.create({
            id: 1,
            userId: 1,
            productId: 1
        })

        await Order.create({
            id: 2,
            userId: 2,
            productId: 2
        })

    } catch (err) {
        console.error(err)
    }
}

seed()