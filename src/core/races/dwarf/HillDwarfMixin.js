export const HillDwarfMixin = Dwarf => class HillDwarf extends Dwarf {
  subrace = 'hill dwarf'

  dwarvenToughness = {
    state: true,
    title: 'Dwarven Toughness',
    description: 'Your hit point maximum increases by 1, and it increases by 1 every time you gain a level.',
    applyIt() {
      this.hitPointMaximumIncrease = this.hitPointMaximumIncrease + 1
    },
  }

  constructor(options = {}) {
    super(options)
    this.abilityScoreIncrease.init({ wisdom: 1 })

    this.dwarvenToughness.applyIt.call(this)
  }
}
