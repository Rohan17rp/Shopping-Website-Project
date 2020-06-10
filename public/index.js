function createProductCard(product) {
    //Accepts a new product detail taken as input from the DB and creates a card to display it on the frontend
    return $(`
    <div class="col-3 card mx-2 p-3">
        <h4 class="product-name">${product.name}</h4>
        <div class="product-manufacturer">${product.manufacturer}</div>
        <div class="row">
            <div class="col m-3 p-3">
                <b>Rs. ${product.price}</b>
            </div>
            <button class="col btn btn-primary m-3">Add to Cart</button> 
        </div>
    </div>`
    )
}

function fetchProducts(callback) {
    $.get('/api/products', function (data) {
        callback(data)
    })
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
