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
      const thrown4d6 = diceThrower.throwDices('4d6')
      this.abilityScores.push(phb.computeAbilityScore(thrown4d6))
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
