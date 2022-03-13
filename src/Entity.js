import { diceThrower } from './DiceThrower.js'
import { phb } from './PlayersHandBook.js'

class Entity {
  constructor() {
    this.experiencePoints = 0

    this.initAbilityScores()
    this.initAbilities()
    this.initLevel()
  }

  initAbilities() {
    this.abilities = {
      strength: null,
      dexterity: null,
      constituion: null,
      intelligence: null,
      wisdom: null,
      charisma: null,
    }
  }



  initAbilityScores() {
    this.abilityScores = []
    for (let i = 0; i < 6; i++) {
      const trow = diceThrower.throwDices('4d6')
      const sorted = trow.slice().sort((a, b) => a - b)
      const firstMaxThree = sorted.reverse().slice(0, 3)
      const sum = firstMaxThree.reduce((acc, current) => acc + current, 0)

      this.abilityScores.push(sum)
    }
  }
  initLevel() {
    if (this.experiencePoints < 300) {
      this.level = 1
      this.proficiencyBonus = 2
    }
  }

}


export default Entity
