const save = require("./save")
const items = require("./item.js")

function createPlayer(obj, nickname, value) {
    const config = {
        value:value,
        writable:true
    }
    Object.defineProperty(obj, nickname, config)
    save.nicknames.push(nickname)
    items()
}
//save roubado
createPlayer(save.saves, "wwssadadba", {
    coin:0,
    cps:9999.9,
    objects:[]
})



function login(stream) {
    stream.on("login", (nickname) => {
        const playerSave = save.getSave(nickname)
        stream.emit("updadeSave", playerSave)
    })

    stream.on("register", (nickname)=>{
        if(save.checkNickname(nickname) == true) return

        createPlayer(save.saves, nickname, {
            coin:0,
            cps:0.1,
            objects:[]
        })
    })
}

module.exports = login