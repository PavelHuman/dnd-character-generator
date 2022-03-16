class Dwarf {
  abilityScoreIncrease = 2
  age = 200
  alignment = 'fair'
  size = 140
  speed = 25
  languages = true
  subraces = ['hill', 'mountain']

  constructor(
    darkvision, dwarvenResilience, dwarvenCombatTraining,
    proficiency, stonecunning, subrace,
    dwarvenToughness, dwarvenArmorTraining
  ) {
    this.darkvision = darkvision,
      this.dwarvenResilience = dwarvenResilience,
      this.dwarvenCombatTraining = dwarvenCombatTraining,
      this.proficiency = { tools: [] },
      this.stonecunning = stonecunning,
      this.subrace = subrace,
      this.dwarvenToughness = dwarvenToughness,
      this.dwarvenArmorTraining = dwarvenArmorTraining
  }
}
export const dwarf = new Dwarf()
