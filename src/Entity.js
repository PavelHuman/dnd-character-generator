import { diceThrower } from './DiceThrower.js'
import { phb } from './PlayersHandBook.js'

class Entity {
  constructor({ data }) {
    this.name = data?.name ?? ''
    this.race = data?.race ?? ''

    this.initAbilities()
    this.initAbilityScores()
  }

  initAbilities() {
    this.abilities = phb.getAbilities()
  }

  initAbilityScores() {
    this.abilityScores = Object.keys(this.abilities)
      .map(() => phb.computeAbilitySrore(diceThrower.throwDices('4d6')))
  }
}

export default Entity
