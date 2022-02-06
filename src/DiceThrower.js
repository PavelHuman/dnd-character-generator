class DiceThrower {
  static parseDices(dices) {
    const [qtyDice, typeOfDices] = dices.split('d')
    return [qtyDice, typeOfDices]
  }

  throwDices(dices) {
    const [qty, type] = DiceThrower.parseDices(dices)

    console.log({
      qty,
      type,
    })
  }
}

export default DiceThrower
