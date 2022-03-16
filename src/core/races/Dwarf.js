class Dwarf {
  abilityScoreIncrease
  age
  alignment
  size
  speed
  languages
  subraces

  constructor() {
    this.initSubrace
    this.abilityScoreIncrease = { title: string, description: string, state: boolean }
    this.age = { title: string, description: string, state: boolean }
    this.alignment = { title: string, description: string, state: boolean }
    this.size = { title: string, description: string, state: boolean }
    this.speed = { title: string, description: string, state: boolean }
    this.darkvision = { title: string, description: string, state: boolean }
    this.dwarvenResilience = { title: string, description: string, state: boolean }
    this.dwarvenCombatTraining = { title: string, description: string, state: boolean }
    this.proficiency = { tools: [] }
    this.stonecunning = { title: string, description: string, state: boolean }
    this.languages = { title: string, description: string, state: boolean }
    this.subrace = { title: string, description: string, state: boolean }
    this.dwarvenArmorTraining = { title: string, description: string, state: boolean }
    this.dwarvenToughness = { title: string, description: string, state: boolean }

  }
}
