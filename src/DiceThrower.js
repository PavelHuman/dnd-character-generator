class DiceThrower {
  constructor() {
    this.name = 'DiceThrower'
  }

  static parseDices(dices) {
    const [qtyDice, typeOfDices] = dices.split('d')
    return [qtyDice, typeOfDices]
  }

  throwDices(dicesToTrow) {
    const [diceQty, diceType] = DiceThrower.parseDices(dicesToTrow)

    return Array.from({ length: +diceQty }, () => DiceThrower.throwDice(+diceType))
  }

  static throwDice(diceType) {
    return Math.ceil(Math.random() * diceType)
  }
}

/*
  *************
*/


function DiceThrowerEs5() {
  this.name = 'DiceThrower'
}

DiceThrowerEs5.parseDices = function (dices) {
  const [qtyDice, typeOfDices] = dices.split('d')
  return [qtyDice, typeOfDices]
}

DiceThrowerEs5.throwDice = function (diceType) {
  return Math.ceil(Math.random() * diceType)
}

DiceThrowerEs5.prototype.throwDices = function (dicesToTrow) {
  const [diceQty, diceType] = DiceThrowerEs5.parseDices(dicesToTrow)

  return Array.from({ length: +diceQty }, () => DiceThrowerEs5.throwDice(+diceType))
}

export default DiceThrower
