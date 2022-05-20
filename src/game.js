var player = {
  coin: save('coin', 0),
  cps: save('cps', 0.1)
}
updadeCoin()

const Cat = createItem('Cat', 1, 1)
const Dog = createItem('Dog', 5, 2)
const Donkey = createItem('Donkey', 25, 5)
const Goat = createItem('Goat', 75, 8)
const Horse = createItem('Horse', 126, 19)
const Pig = createItem('Pig', 145, 24)
const Rabbit = createItem('Rabbit', 172, 26)
const Alpaca = createItem('Alpaca', 180, 35)
const Amphibian = createItem('Amphibian')
const Anaconda = createItem('Anaconda')
const Ant = createItem('Ant')
const Bandicoot = createItem('Bandicoot')
const Bat = createItem('Bat')
const Bear = createItem('Bear')
const Bee = createItem('Bee')
const Beetle = createItem('Beetle')
const Bird = createItem('Bird')

setInterval(() => {
  player.coin += player.cps
  updadeCoin()
}, 1000/FPS)// 1000 == 1s
