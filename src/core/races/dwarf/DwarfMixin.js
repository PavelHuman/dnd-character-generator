export const DwarfMixin = Race => class Dwarf extends Race {
  speed = 25

  darkvision = {
    state: true,
    title: 'Darkvision',
    description: 'Accustomed to life underground, you have superior vision in dark and dim conditions. You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. You can\'t discern color in darkness, only shades of gray.',
  }

  dwarvenResilience = {
    state: true,
    title: 'Dwarven Resilience',
    description: 'You have advantage on saving throws against poison, and you have resistance against poison damage (explained in chapter 9, "Combat").',
  }

  dwarvenCombatTraining = {
    state: true,
    title: 'Dwarven Combat Training',
    description: 'You have proficiency with the battleaxe, handaxe, light hammer, and warhammer',
    applyIt: () => {
      this.proficiency.weapon = [
        ...this.proficiency.weapon,
        ...['battleaxe', 'handaxe', 'light hammer', 'warhammer'],
      ]
    },
  }


  stonecunning = {
    state: true,
    title: 'Stonecunning',
    description: 'Whenever you make an Intelligence (History) check related to the origin of stonework, you are considered proficient in the History skill and add double your proficiency bonus to the check, instead of your normal proficiency bonus.',
  }

  languages = ['common', 'dwarvish']

  constructor(options = {}) {
    super(options)
    super.increaseAbilityScore({ constitution: 2 })
    super.initProficiencyTools([
      ...(options.proficiencyTool
        ? [options.proficiencyTool]
        : ['smith\'s tools', 'brewer\'s supplies', 'mason\'s tools']),
    ])

    this.dwarvenCombatTraining.applyIt()
  }


}
