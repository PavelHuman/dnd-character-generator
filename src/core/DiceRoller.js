class DiceRoller {
  static parseDices(dices) {
    const [qtyDice, typeOfDices] = dices.split('d')
    return [qtyDice, typeOfDices]
  }

  static rollDice(diceType) {
    return Math.ceil(Math.random() * diceType)
  }

  constructor() {
    this.name = 'DiceRoller'
  }

  rollDices(dicesToRoll) {
    const [diceQty, diceType] = DiceRoller.parseDices(dicesToRoll)

    return Array.from({ length: +diceQty }, () => DiceRoller.rollDice(+diceType))
  }
}

export const diceRoller = new DiceRoller()
