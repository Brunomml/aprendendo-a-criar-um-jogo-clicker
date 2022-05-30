const coinEl = document.querySelector(".coin")
const p = document.querySelector("p")

function updadeCoinEl() {
    coinEl.innerText = `coin: ${player.coin.toFixed(2)}`
}

function updadeObjects() {
    player.objects.forEach(item => {
        p.innerHTML = `
        <div class="${item.name}"">
            name: ${item.name} <br/> 
            price: ${item.price} 
            value: ${item.cps} 
        </div><br/>`
    })    
}