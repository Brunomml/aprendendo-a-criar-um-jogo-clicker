const save = require("./save.js")

function createItem(name, price, cps) {
    save.addItem(name, price, cps)
}


function items() {
    createItem("amongus", 10, 2)
}

module.exports = items