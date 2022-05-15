function createEl() {
    function add(name, price){
        const p = document.querySelector('p')
    
        p.innerHTML+=`
            <div class="${name}">${name}: ${price}</div><br/>
        `
    }
    
    function updade(name, price){
        const p = document.querySelector(`div.${name}`)
    
        p.innerHTML=`${name}: ${price}`
    }

    return {
        add,
        updade
    }
}

element = createEl()