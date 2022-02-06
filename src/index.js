import DiceThrower from './DiceThrower.js'

console.log("index.js")

const diceGenerator = new DiceThrower()
diceGenerator.throwDices('4d6')
diceGenerator.throwDices('2d20')
