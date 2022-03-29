import { Dwarf } from './Dwarf.js'

export class HillDwarf extends Dwarf {
  constructor(options) {
    super(options)

    this.abilityScoreIncrease.init({ wisdom: 1 })
  }
}
export const hillDwarf = new HillDwarf()
