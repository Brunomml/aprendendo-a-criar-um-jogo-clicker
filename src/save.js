let saves = Object.create(Object.prototype)
let nicknames = []


function checkNickname(nickname) {
    // nome não existe
    if (saves[nickname] == undefined) {
        return false
    }
    // nome existe
    if (saves[nickname] != undefined) {
        return true
    }
}

function updade() {
    nicknames.forEach(nickname => {
        saves[nickname].coin += saves[nickname].cps
    })
}

function getSave(nickname) {
    return saves[nickname]
}

function updadeSave(stream) {
    stream.on("fnUpdadeSave", (nickname)=>{
        stream.emit("updadeSave", getSave(nickname))
    })
}



// muito complexo
function addItem(itemName, priceValue, CpsValue){


    for (let index = 0; index < nicknames.length; index++) {
        const nickname = nicknames[index];
        const playerObjects = saves[nickname].objects
        
        //vê se o player já tem esse item
        if (playerObjects[{name:itemName}] != undefined) return 


        saves[nickname].objects.push({
            name:itemName,
            timesBought: 0,
            price: priceValue,
            cps: CpsValue
        })
    }
}

// vai ficar aqui temporariamente
function buyItem(itemName) {
    nicknames.forEach(nickname => {
        saves[nickname].objects.forEach(item => {
            if (item.name == itemName) {
                item.timesBought += 1
            }
        })
    })
}

setInterval(()=>{
    updade()
}, 1000/15)


module.exports = {
    checkNickname,
    addItem,
    buyItem,
    updadeSave,
    getSave,
    nicknames,
    saves
}