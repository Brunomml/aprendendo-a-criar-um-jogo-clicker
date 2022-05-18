function createItem(name, price, value) {
    let item = {
        name,
        price: save(name, price),
        value
    }
    element.add(item.name, item.price)
    input.add(item.name)
    
    function updadeItem() {
        element.updade(name, item.price)
        updadeSave(name, item.price)
    }

    function buy() {
        player.cps+=item.value
        player.coin-=item.price
        item.price+=Math.ceil(item.price*25/100)
    }
    function click() {
        if (player.coin < item.price) return
        buy()
        
        updadeCoin()
        updadeItem()
    }

    return {
        item,
        click
    }
}
