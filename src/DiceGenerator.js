class DiceGenerator {
  constructor(dice) {
    this.dice = dice // 4d6
  }

  parseDice() {
    const [qtyDice, typeDice] = this.dice.split('d')

    console.log({
      qtyDice,
      typeDice,
    })
  }
}

export default DiceGenerator
