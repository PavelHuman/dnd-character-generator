import { Dwarf } from "./Dwarf.js"

export class HillDwarf extends Dwarf {

  dwarvenToughness = {
    applyIt: function () {
      this.hitPointMaximumIncrease += 1
    },
    description: ' Your hit point maximum increases by 1, and it increases by 1 every time you gain a level.', state: true, title: 'Dwarven Toughness',
  }

  constructor(options) {
    super(options)
    this.dwarvenToughness.applyIt.call(this)
    this.abilityScoreIncrease.init({ wisdom: 1 })
  }
}
export const hillDwarf = new HillDwarf()
