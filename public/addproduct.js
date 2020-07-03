$(() => {
    let form = $('#form')[0]
    let prodname = $('#productname')[0]
    let manufacturer = $('#prodmanuf')[0]
    let stock = $('#prodstock')[0]
    let description = $('#proddescription')[0]
    let price = $('#prodprice')[0]
    let rating = $('#prodrating')[0]
    let submitbtn = $('#submitbtn')[0]
    let modal = $('.modal')
    let goToMenuBtn = $('#goToMenuBtn')[0]
    let addAnotherBtn = $('#addAnotherBtn')[0]

    goToMenuBtn.onclick = () => {
        window.location = '/'
    }

    addAnotherBtn.onclick = () => {
        location.reload()
    }

    function addProduct() {
        // console.log('in submit function')
        let p = {
            name: prodname.value,
            manufacturer: manufacturer.value,
            stock: stock.value,
            description: description.value,
            price: price.value,
            rating: rating.value
        }

        $.post('/api/products', p, function (prod) {
            // console.log('Product added')
            modal.modal('toggle')
        })
    }

    submitbtn.onclick = addProduct
})