$(() => {
    let user = $('#username')[0]
    let pass = $('#password')[0]
    let submitbtn = $('#submitbtn')[0]
    let modal = $('.modal')

    function loginRequest() {
        // console.log('in login function')
        // console.log(user.value)
        // console.log(pass.value)
        $.post('/api/login', {
            username: user.value,
            password: pass.value
        }, function (data) {
            if (data === 'Incorrect username or password') {
                //Incorrect user
                // console.log('incorrect')
                modal.modal('toggle')
            } else {
                //Login
                // console.log('correct')
                sessionStorage.setItem('currentUser', user.value)
                window.open('/', "_self")
            }
        })
    }


    submitbtn.onclick = loginRequest
})