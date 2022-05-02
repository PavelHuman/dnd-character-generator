import { Dwarf } from './Dwarf.js'

export class MountainDwarf extends Dwarf {


  dwarvenArmorTraining = {
    title: 'Dwarven Armor Training.',
    state: true,
    description: 'You have proficiency with light and medium armor',
    applyIt: function () {
      const armorProficiency = ['light', 'medium']
      this.proficiency.armor = armorProficiency
    },
  }


  constructor(options) {
    super(options)
    this.dwarvenArmorTraining.applyIt.call(this)
    this.abilityScoreIncrease.init({ strength: 2 })
  }


}
export const mountainDwarf = new MountainDwarf()
