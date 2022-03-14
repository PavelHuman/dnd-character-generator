class DiceRoller {
  static parseDices(dices) {
    const [qtyDice, typeOfDices] = dices.split('d')
    return [qtyDice, typeOfDices]
  }

  constructor() {
    this.name = 'DiceRoller'
  }

  rollDice(diceType) {
    return Math.ceil(Math.random() * diceType)
  }

  rollKeys(keys) {
    return keys[this.rollDice(keys.length) - 1]
  }

  rollDices(dicesToRoll) {
    const [diceQty, diceType] = DiceRoller.parseDices(dicesToRoll)

    return Array.from({ length: +diceQty }, () => this.rollDice(+diceType))
  }
}

export const diceRoller = new DiceRoller()
