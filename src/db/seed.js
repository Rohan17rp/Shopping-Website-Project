// This file is not directly called by any other file
// This file only generates some sample data which is used during the development phase
// This is not a part of the final project and is not executed in the final run
const {db} = require('./connection')
const {User, Product, Order} = require('./model')

const seed = async () => {
    try {
        db.sync()

        let users = [
            {
                id: 1,
                name: 'Sherlock Holmes',
                username: 'sherlock',
                password: 'iamsherlocked'
            },
            {
                id: 2,
                name: 'Mad man with a box',
                username: 'doctor',
                password: 'tardis'
            },
            {
                id: 3,
                name: 'Dolores Abernathy',
                username: 'dolores',
                password: 'westworld'
            }
        ]

        await User.findOrCreate({where: users[0]})

        await User.findOrCreate({where: users[1]})

        await User.findOrCreate({where: users[2]})

        let products = [
            {
                id: 1,
                name: '7 Pro',
                manufacturer: 'OnePlus',
                stock: 100,
                description: 'The 6.67 inch Fluid AMOLED display on the OnePlus 7 Pro is our most advanced screen ever. Experience unrivalled smoothness and clarity with a 90 Hz refresh rate and QHD+ resolution.',
                price: 42999,
                rating: 4
            },
            {
                id: 2,
                name: 'S10 Lite',
                manufacturer: 'Samsung',
                stock: 50,
                description: '8 GB RAM | 128 GB ROM | Expandable Upto 1 TB\n' +
                    '17.02 cm (6.7 inch) Full HD+ Display\n' +
                    '48MP + 12MP + 5MP | 32MP Front Camera\n' +
                    '4500 mAh Lithium-ion Battery\n' +
                    'Qualcomm Snapdragon 855 (SM8150) Processor',
                price: 42999,
                rating: 5
            },
            {
                id: 3,
                name: 'Galaxy A51',
                manufacturer: 'Samsung',
                stock: 100,
                description: '6 GB RAM | 128 GB ROM | Expandable Upto 512 GB\n' +
                    '16.26 cm (6.4 inch) Full HD+ Display\n' +
                    '48MP + 12MP + 5MP + 5MP | 32MP Front Camera\n' +
                    '4000 mAh Lithium-ion Battery\n' +
                    'Exynos 9611 Processor',
                price: 25999,
                rating: 3
            },
            {
                id: 4,
                name: 'X2 Pro',
                manufacturer: 'Realme',
                stock: 75,
                description: '8 GB RAM | 128 GB ROM\n' +
                    '16.51 cm (6.5 inch) Full HD+ Display\n' +
                    '64MP + 13MP + 8MP + 2MP | 16MP Front Camera\n' +
                    '4000 mAh Battery\n' +
                    'Qualcomm Snapdragon 855 Plus Processor\n' +
                    '90 Hz Ultra Smooth Display\n' +
                    '50W Super Vooc Flash Charge\n' +
                    '20X Hybrid Zoom',
                price: 31999,
                rating: 3
            },
            {
                id: 5,
                name: '7.2',
                manufacturer: 'Nokia',
                stock: '82',
                description: '4 GB RAM | 64 GB ROM | Expandable Upto 512 GB\n' +
                    '16.0 cm (6.3 inch) Full HD+ Display\n' +
                    '48MP + 5MP + 8MP | 20MP Front Camera\n' +
                    '3500 mAh Battery\n' +
                    'Qualcomm Snapdragon 660 Processor',
                price: 16399,
                rating: 4
            },
            {
                id: 6,
                name: 'iPhone SE',
                manufacturer: 'Apple',
                description: '64 GB ROM\n' +
                    '11.94 cm (4.7 inch) Retina HD Display\n' +
                    '12MP Rear Camera | 7MP Front Camera\n' +
                    'A13 Bionic Chip with 3rd Gen Neural Engine Processor\n' +
                    'Water and Dust Resistant (1 meter for Upto 30 minutes, IP67)\n' +
                    'Fast Charge Capable\n' +
                    'Wireless charging (Works with Qi Chargers | Qi Chargers are Sold Separately',
                stock: 24,
                price: 42500,
                rating: 5
            },
            {
                id: 7,
                name: 'Redmi 8A Dual',
                manufacturer: 'Mi',
                description: '3 GB RAM | 64 GB ROM\n' +
                    '15.8 cm (6.22 inch) Full HD+ Display\n' +
                    '13MP + 2MP | 8MP Front Camera\n' +
                    '5000 mAh Battery\n' +
                    'Snapdragon 439  Processor',
                price: 9999,
                stock: 150,
                rating: 3
            },
            {
                id: 8,
                name: 'Y15',
                manufacturer: 'Vivo',
                description: '4 GB RAM | 64 GB ROM | Expandable Upto 256 GB\n' +
                    '16.13 cm (6.35 inch) HD+ Display\n' +
                    '13MP + 2MP + 8MP | 16MP Front Camera\n' +
                    '5000 mAh Battery\n' +
                    'MediaTek Helio P22 Processor',
                price: 12990,
                rating: 3,
                stock: 200
            }
        ]


        await Product.findOrCreate({where: products[0]})
        await Product.findOrCreate({where: products[1]})
        await Product.findOrCreate({where: products[2]})
        await Product.findOrCreate({where: products[3]})
        await Product.findOrCreate({where: products[4]})
        await Product.findOrCreate({where: products[5]})
        await Product.findOrCreate({where: products[6]})
        await Product.findOrCreate({where: products[7]})


        let orders = [
            {
                id: 1,
                userId: 1,
                productId: 1
            },
            {
                id: 2,
                userId: 2,
                productId: 2
            }
        ]

        await Order.findOrCreate({where: orders[0]})
        await Order.findOrCreate({where: orders[1]})

    } catch (err) {
        console.error(err)
    }
}

seed()