
import { phb } from './core/PlayersHandBook.js'

class Entity {
  constructor() {
    this.experiencePoints = 0

    this.initAbilityScores()
    this.initAbilities()
    this.initLevel()

  }

  initAbilities() {
    this.getAbilities = {
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
