class DiceThrower {
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

export default DiceThrower
