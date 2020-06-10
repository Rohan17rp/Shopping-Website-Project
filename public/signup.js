$(() => {
    let name = $('#name')[0]
    let username = $('#username')[0]
    let password = $('#password')[0]
    let confirmpass = $('#confirmPassword')[0]
    let submitbtn = $('#submitbtn')[0]

    function sendRequest() {
        // console.log('in func')
        // console.log(name.value)
        // console.log(username.value)
        // console.log(password.value)
        if (password.value != confirmpass.value) {
            $('#confirmPasswordHelp')[0].hidden = false
            return
        }

        $.post('/api/users', {
            name: name.value,
            username: username.value,
            password: password.value
        }, function (data) {
            if (data === 'invalid') {
                $('#para')[0].innerText = 'User with this username already exists. Please choose a different username.'
            } else {
                window.open('/login.html', '_self')
            }
        })
    }


    submitbtn.onclick = sendRequest
})