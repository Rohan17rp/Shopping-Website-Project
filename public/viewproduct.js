$(() => {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);

    let productId = urlParams.get('productId')

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
    })
})