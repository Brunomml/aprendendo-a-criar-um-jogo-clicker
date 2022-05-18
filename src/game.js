var player = {
  coin: save('coin', 0),
  cps: save('cps', 1)
}
updadeCoin()

const avó = createItem('avó', 1, 0.5)
const azeitona = createItem('azeitona', 10, 1.5)
const flamingo = createItem('flamingo', 100, 5)

setInterval(() => {
  player.coin += player.cps
  updadeCoin()
}, 1000) // 1 segundo
