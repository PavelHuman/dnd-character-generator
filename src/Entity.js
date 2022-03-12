import { diceThrower } from './DiceThrower.js'
import { phb } from './PlayersHandBook.js'

class Entity {
  constructor({ data }) {
    this.name = data.name ?? ''
    this.race = data.race ?? ''
    this.experiencePoints = 0

    this.initAbilities()
    this.initAbilityScores()
    this.initLevel()
  }

  initAbilities() {
    this.abilities = phb.getAbilities()
  }

  initAbilityScores() {
    this.abilityScores = Object.keys(this.abilities)
      .map(() => phb.computeAbilitySrore(diceThrower.throwDices('4d6')))
  }

  initLevel() {
    if (this.experiencePoints < 300) {
      this.level = 1
      this.proficiencyBonus = 2
    }
  }

}


export default Entity
