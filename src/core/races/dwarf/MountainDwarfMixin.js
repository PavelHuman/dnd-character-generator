export const MountainDwarfMixin = Dwarf => class MountainDwarf extends Dwarf {
  subrace = 'mountain dwarf'

  dwarvenArmorTraining = {
    state: true,
    title: 'Dwarven Armor Training',
    description: 'You have proficiency with light and medium armor.',
    applyIt: () => {
      this.proficiency.armor = [
        ...this.proficiency.armor,
        ...['light', 'medium'],
      ]
    },
  }


  constructor(options = {}) {
    super(options)
    super.increaseAbilityScore({ strength: 2 })

    this.dwarvenArmorTraining.applyIt()
  }
}
