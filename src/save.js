function updadeSave(name, value) {
    localStorage.setItem(name, value)
    console.log(`[${name}]`, value);
}



function setSave(name, value){
    localStorage.setItem(name, value)
    return value
}
function getSave(name) {
    let save = localStorage.getItem(name)
    return save
}

function save(name, value) {
    playerSave = getSave(name)
    console.log(playerSave);
    
    if (playerSave == null) {
        setSave(name, value)
        playerSave = getSave(name)
    }
    return parseFloat(playerSave)
}


function removeSave(name) {
    localStorage.removeItem(name)
}