import { phb } from '../core/PlayersHandBook.js'

class Entity {
  constructor(data = {}) {
    this.name = data.name ?? ''
    this.race = data.race ?? ''
    this.subrace = data.subrace ?? ''
    this.experiencePoints = data.experiencePoints ?? 0

    this.initAbilities()
    this.initAbilityScores()
    this.initLevel()
    this.initRace()
    this.initSubrace()
  }

  initAbilities() {
    this.abilities = phb.getAbilities()
  }

  initAbilityScores() {
    this.abilityScores = Object.keys(this.abilities)
      .map(() => phb.getAbilityScore())
  }

  initLevel() {
    if (this.experiencePoints < 300) {
      this.level = 1
      this.proficiencyBonus = 2
    }
  }

  initRace() {
    Object.assign(this, phb.getRacialTraits(this.race))
  }

  initSubrace() {
    Object.assign(this, phb.getSubracialTraits(this.subrace))
  }

}


export default Entity
