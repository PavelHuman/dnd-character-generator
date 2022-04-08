
import { phb } from '../core/PlayersHandBook.js'


class Entity {
  constructor({
    race,
    options,
  }) {
    this.experiencePoints = 0
    this.initAbilityScores()
    this.initAbilities()
    this.initLevel()
    this.initRace(race, options)

  }

  initRace(race, options) {
    Object.assign(
      this,
      phb.getRacialTraits(race, options),
    )
  }

  initAbilities() {
    this.abilities = phb.getAbilities()
  }

  initAbilityScores() {
    this.abilityScores = []
    for (let i = 0; i < 6; i++) {
      this.abilityScores.push(phb.getAbilityScore())
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
