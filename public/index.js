function createProductCard(product) {
    //Accepts a new product detail taken as input from the DB and creates a card to display it on the frontend
    return $(`
    <div class="col-8 col-sm-8 col-md-5 col-lg-3 card mx-2 p-3 m-2">
        <h4 class="product-name">${product.name}</h4>
        <div class="product-manufacturer">${product.manufacturer}</div>
        <div class="row">
            <div class="col m-2 p-2 product-price">
                <b>Rs. ${product.price}</b>
            </div>
            <div class="col m-1">
                <button class="row btn btn-primary m-1 viewDetails" name="${product.id}">View Details</button>
                <button class="row btn btn-primary m-1 addToCartBtn" name="${product.id}">Add to Cart</button> 
            </div>
        </div>
    </div>`
    )
}

function fetchProducts(callback) {
    $.get('/api/products', function (data) {
        callback(data)
    })
}

function getIdFromUsername(username, productId, addToCart) {
    $.get('/api/users', {
        username: username
    }, function (user) {
        // return user.id
    }).then((user) => {
        addToCart(productId, user.id)
    })
}

function addToCart(pid, uid) {
    $.post('/api/order', {
        userId: uid,
        productId: pid
    }, function () {
        console.log('Added ' + pid + ' to ' + uid + "'s cart")
    })
}

function addProductToCart(productId) {
    let pid = productId
    let username = sessionStorage.getItem('currentUser')
    getIdFromUsername(username, productId, addToCart)
}

$(function () {
    let productList = $('#productlist')
    let usernametext = $(`#usernametext`)[0]
    let logout = $('#logout')[0]
    let userblock = $('#userblock')[0]
    let loginblock = $('#loginblock')[0]

    //Fetch all products from the Backend DB and then display them as cards on the frontend
    fetchProducts(function (products) {
        productList.empty()
        for (product of products) {
            productList.append(createProductCard(product))
        }
        $('.viewDetails').on('click', function (e) {
            let target = e.target
            let productId = target.name
            let url = '/viewproduct.html?productId=' + productId
            window.open(url, '_self')
        })
        $('.addToCartBtn').on('click', function (e) {
            let modalTitle = $('.modal-title')[0]
            let modalbody = $('.modal-body')[0]
            let modal = $('.modal')
            if (sessionStorage.getItem('currentUser')) {
                let target = e.target
                let productId = target.name
                addProductToCart(productId)
                modalTitle.innerText = 'Congratulations'
                modalbody.innerHTML = '<p>The item has been added to your cart.</p>'
            } else {
                modalTitle.innerText = 'Sign in required'
                modalbody.innerHTML = '<p>You must be logged in to add items to Cart</p>'
            }
            modal.modal('toggle')
        })
    })

    if (sessionStorage.getItem('currentUser')) {
        // console.log('user found')
        userblock.style.display = 'block'
        loginblock.style.display = 'none'
        let currentUser = sessionStorage.getItem('currentUser')
        usernametext.innerText = currentUser
    } else {
        // console.log('ok')
        userblock.style.display = 'none'
        loginblock.style.display = 'block'
    }


    logout.onclick = () => {
        // console.log('logout')
        sessionStorage.removeItem('currentUser')
        location.reload()
    }
})
