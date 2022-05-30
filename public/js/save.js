const div = document.querySelector("#name")
const socket = io()
let player = {
    coin: 0,
    cps:0,
    objects:[]
}
let nickname;

socket.on("updadeSave", (save)=>{
    if (save == null) return 
    
    player = save
    nickname = `${div.value}`
    updadeCoinEl()
    updadeObjects()
})
socket.emit("fnUpdadeSave", nickname)

setInterval(()=>{
    if (nickname != undefined) {
        socket.emit("fnUpdadeSave", nickname)
    }
}, 1000)