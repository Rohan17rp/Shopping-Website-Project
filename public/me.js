function getContent(username, content) {
    $.get('/api/users', {
        username: username
    }, function (user) {
        content.innerHTML = `
            Name = ${user.name} <br>
            Username = ${user.username} <br>
            ID = ${user.id}
        `
    })
}

$(() => {
    let heading = $('#heading')[0]
    let content = $('#content')[0]
    let username = sessionStorage.getItem('currentUser')
    let logout = $('#logout')[0]

    heading.innerText = 'Welcome ' + username
    getContent(username, content)

    logout.onclick = () => {
        // console.log('logout')
        sessionStorage.removeItem('currentUser')
        let url = '/'
        window.open(url, '_self')
    }
})