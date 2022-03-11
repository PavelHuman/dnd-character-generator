class DiceThrower {
  static parseDices(dices) {
    const [qtyDice, typeOfDices] = dices.split('d')
    return [qtyDice, typeOfDices]
  }

  static throwDice(diceType) {
    return Math.ceil(Math.random() * diceType)
  }

  constructor() {
    this.name = 'DiceThrower'
  }

  throwDices(dicesToTrow) {
    const [diceQty, diceType] = DiceThrower.parseDices(dicesToTrow)

    return Array.from({ length: +diceQty }, () => DiceThrower.throwDice(+diceType))
  }
}

export const diceThrower = new DiceThrower();
