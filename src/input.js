function createInput() {
    function add(name) {
        const el = document.querySelector(`div.${name}`)
        
        el.setAttribute('onclick', `${name}.click()`)
    }

    return {
        add
    }    
}

input = createInput()