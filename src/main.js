const player = {
    coin:0,
    cps:1
}


function createItem(name, price, value) {
    const item = {
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
        click
    }
}



const oneSecond = 1000
setInterval(()=>{
    player.coin += player.cps
    updadeCoin()
}, oneSecond)