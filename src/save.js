function removeSave(name) {
    localStorage.removeItem(name)
    if (name == 'all') {
        localStorage.clear()
    }
}
function updadeSave(name, value) {
    localStorage.setItem(name, value)
}

function updadeCoinSave() {
    updadeSave('coin', player.coin)
    updadeSave('cps', player.cps)
}



function save(name, value) {
    function setSave(name, value){
        localStorage.setItem(name, value)
        return value
    }
    function getSave(name) {
        let save = localStorage.getItem(name)
        return save
    }
    
    playerSave = getSave(name)
    
    if (playerSave == null || playerSave == undefined) {
        playerSave = setSave(name, value)
    }
    return parseFloat(playerSave)
}

removeSave('all')