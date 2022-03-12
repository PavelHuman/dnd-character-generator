class PlayersHandBook {
  computeAbilitySrore(trown4d6) {
    return trown4d6.slice().sort((a, b) => b - a)
      .slice(0, 3)
      .reduce((acc, current) => acc + current, 0)
  }

  getAbilities() {
    return {
      strength: null,
      dexterity: null,
      constituion: null,
      intelligence: null,
      wisdom: null,
      charisma: null,
    }
  }
}

export const phb = new PlayersHandBook()
