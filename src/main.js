function createItem(name, price, value) {
    let item = {
        name,
        price,
        value
    }
    element.add(item.name, item.price)
    input.add(item.name)
    

    function buy() {
        player.cps+=item.value
        player.coin-=item.price
        updadeCoin()
    }
    function click() {
        if (player.coin < item.price) return
        buy()
        

        item.price+=Math.ceil(item.price*25/100)
        element.updade(item.name, item.price)
    }

    return {
        item,
        click
    }
}


const oneSecond = 1000
setInterval(()=>{
    player.coin += player.cps
    updadeCoin()
    save.updadeSave()
}, oneSecond)