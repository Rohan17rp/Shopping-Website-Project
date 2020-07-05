let cartTotalAmount = 0


function createProductCard(product, orderId) {
    // console.log(product)
    //Accepts a new product detail taken as input from the DB and creates a card to display it on the frontend
    cartTotalAmount += product.price
    return $(`
    <div class="col-3 card mx-2 p-3">
        <h4 class="product-name">${product.name}</h4>
        <div class="product-manufacturer">${product.manufacturer}</div>
        <div class="row"> 
            <div class="col m-3 p-3">
                <b>Rs. ${product.price}</b>
            </div>
            <div class="col m-2 p-2">
                <button class="row btn btn-primary m-1 viewDetails" name="${product.id}">View Details</button>
                <button class="btn btn-danger removeFromCart" name="${orderId}">Remove From Cart</button>
            </div>    
        </div>
    </div>
    `
    )
}

function viewProduct(order, productList) {
    console.log('In viewProduct - ' + order)
    $.post('/api/viewproduct', {
        id: order.productId
    }, function (product) {
        // console.log(product)
        productList.append(createProductCard(product, order.id))
    }).then(() => {
        $('.removeFromCart').on('click', function (e) {
            let target = e.target
            let orderId = target.name
            console.log(orderId)
            $.get('/api/order', {
                orderId: orderId
            }, function (status) {
                console.log(status)
                location.reload()
            })
        })

        $('.viewDetails').on('click', function (e) {
            let target = e.target
            let productId = target.name
            let url = '/viewproduct.html?productId=' + productId
            window.open(url, '_self')
        })

        let totalamount = $('#totalAmount')[0]
        totalamount.innerText = 'Total Amount = ' + cartTotalAmount

        let clearCartBtn = $('#clearcart')[0]
        if (cartTotalAmount !== 0) {
            clearCartBtn.style.display = 'block'
            clearCartBtn.onclick = () => {
                $('.removeFromCart').click()
            }
        } else {
            // console.log('here')
            clearCartBtn.style.display = 'none'
        }
    })
}

function getIdFromUsername(username, getProductList, productList) {
    $.get('/api/users', {
        username: username
    }, function (user) {
        // return user.id
    }).then((user) => {
        getProductList(user.id, productList)
    })
}

function getProductList(userId, productList) {
    $.post('/api/viewcart', {
        userId: userId
    }, function (orders) {
        // console.log(orders)  //Works fine
        for (order of orders) {
            // console.log(order)
            viewProduct(order, productList)
        }
    })
}

function getCartItems(productList) {
    let username = sessionStorage.getItem('currentUser')
    getIdFromUsername(username, getProductList, productList)
}

$(() => {
    let productList = $('#productList')
    $('#clearcart')[0].style.display = 'none'

    productList.empty()

    let totalamount = $('#totalAmount')[0]
    totalamount.innerText = 'Total Amount = ' + cartTotalAmount

    getCartItems(productList)

    let usernametext = $('#usernametext')[0]
    usernametext.innerText = sessionStorage.getItem('currentUser')

    let logoutbtn = $('#logout')[0]
    logoutbtn.onclick = () => {
        sessionStorage.removeItem('currentUser')
        window.open('/', '_self')
    }
})