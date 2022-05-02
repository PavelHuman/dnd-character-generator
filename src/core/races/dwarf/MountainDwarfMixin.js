export function MountainDwarfMixin(BaseClass) {
  return class MountainDwarf extends BaseClass {


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
}

