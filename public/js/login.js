function login() {
    const nickname = `${input.value}`

    socket.emit("login", nickname)
}

function register() {
    const nickname = `${input.value}`

    socket.emit("register", nickname)
    login()
}