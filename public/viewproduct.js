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
        // console.log('Added ' + pid + ' to ' + uid + "'s cart")
    })
}

function addProductToCart(productId) {
    let pid = productId
    let username = sessionStorage.getItem('currentUser')
    getIdFromUsername(username, productId, addToCart)
}

$(() => {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);

    let productId = urlParams.get('productId')
    let addToCartBtn = $('.addToCartBtn')[0]

    $.post('/api/viewproduct', {
        id: productId
    }, function (product) {
        console.log(product.name)
        $('#productName')[0].innerText = product.name
        $('#details')[0].innerHTML = `
            Product Id = ${product.id}
            <br>
            Manufacturer = ${product.manufacturer}
            <br>
            Description = ${product.description}
            <br>
            Price = ${product.price}
            <br>
            Rating = ${product.rating}
            <br>
            Stock = ${product.stock}
            <br>
        `
        addToCartBtn.name = product.id
    })


    //Add this product to cart of current user
    addToCartBtn.onclick = function (e) {
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
    }


    let logout = $('#logout')[0]
    let userblock = $('#userblock')[0]
    let loginblock = $('#loginblock')[0]
    let usernametext = $(`#usernametext`)[0]


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