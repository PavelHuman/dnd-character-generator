class PlayersHandBook {

  computeAbilityScore(thrown4b6) {
    for (let i = 0; i < 6; i++) {
      const trow = diceThrower.throwDices('4d6')
      const sorted = trow.slice().sort((a, b) => a - b)
      const firstMaxThree = sorted.reverse().slice(0, 3)
      const sum = firstMaxThree.reduce((acc, current) => acc + current, 0)
    }
  }
}
export const phb = new PlayersHandBook()
