class PlayersHandBook {

  computeAbilityScore(thrown4d6) {
    const sorted = thrown4d6.slice().sort((a, b) => a - b)
    const firstMaxThree = sorted.reverse().slice(0, 3)
    const sum = firstMaxThree.reduce((acc, current) => acc + current, 0)
    return sum
  }
}
export const phb = new PlayersHandBook()


