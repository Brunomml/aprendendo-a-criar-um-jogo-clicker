function createItem(name, price, value) {
    const item = {
        name,
        price,
        value
    }
    element.add(item.name, item.price)
    input.add(item.name)
    
    function click() {
        if (player.coin < item.price) return

        player.valueClick+=item.value
        player.coin-=item.price
        
        item.price+=Math.ceil(item.price*25/100)
        
        element.updade(item.name, item.price)
    }

    return {
        click
    }
}


const player = {
    coin:0,
    valueClick:1
}

addEventListener('click', ()=>{
    const div = document.querySelector('div.coin')

    player.coin += player.valueClick
    div.innerHTML=`coin:${player.coin}`
})

const click = createItem('click', 1, 0.5)
const paraf = createItem()
const azeitona = createItem('azeitona', 50, 1)
const flamingo = createItem('flamingo', 2200, 25)