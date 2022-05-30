const express = require("express")
const socketio = require("socket.io")
const http = require("http")

const app = express()
const server = http.createServer(app)
const socket = socketio(server)


const save = require("./save.js")
const login = require("./login")


app.use(express.static("./public"))



socket.on("connection", (stream)=>{
    save.updadeSave(stream)
    login(stream)
    
    stream.on("click", (itemName)=>{
        save.buyItem(itemName)
    })
    
    
})

const PORT = process.env.PORT || 3000
server.listen(PORT, ()=>{
    console.log(PORT);
})