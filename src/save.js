function createSavePlayer() {
    var player = {};

    function set() {
        player = {
            coin:0,
            cps:1
        }
    
        localStorage.setItem('coin', player.coin)
        localStorage.setItem('cps', player.cps)
    }
    
    function get() {
        const coin = localStorage.getItem('coin')
        const cps = localStorage.getItem('cps')

        
        player = {
            coin: parseFloat(coin),
            cps: parseFloat(cps)
        }
    }


    function checkSave(){
        const coin = localStorage.getItem('coin')
        const cps = localStorage.getItem('cps')

        console.log(coin, cps);
        if (coin == undefined || cps == undefined) {
            console.log('false');
            return false
        }
    
        if (!coin == false || cps == false) {
            console.log('true');
            return true
        }

    }

    function start() {
        resp = checkSave()
        if (resp == true) {
            get()
        }

        if (resp == false) {
            set()
        }
    }

    function removeSave() {
        localStorage.removeItem('coin')
        localStorage.removeItem('cps')
    }

    function updadeSave(){
        removeSave()

        localStorage.setItem('coin', player.coin)
        localStorage.setItem('cps', player.cps)
    }
    
    function returnSavePlayer() {
        return player
    }
    
    return{
        start,
        updadeSave,
        returnSavePlayer,
        removeSave
    }
}

function createSaveItem() {
    function set(){

    }
    return {
        start
    }
}

const save = createSavePlayer()

save.start()

var player = save.returnSavePlayer()
updadeCoin()