import { Race } from '../Race.js'

export class Dwarf extends Race {
  languages = ['common', 'dwarvish']

  subraces = ['hill', 'mountain']

  darkvision = {
    init(darkvisionValue) {
      this.value = darkvisionValue
    },
    state: true,
    description: 'Accustomed to life underground, uoy have superior vision in dark and dim conditions. You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. You cant discern color in darkness, only shades of gray.',
    title: 'Darkvision',
    value: 0,
  }

  dwarvenResilience = {
    title: 'Dwarven Resilience.',
    state: true,
    description: 'You have advantage on saving throws against poison, and you have resistance against pzoison damage (explained in chapter 9, "Combat")',
  }

  dwarvenCombatTraining = {
    applyIt() {
      const weapon = ['battleaxe', 'handaxe', 'light hammer', 'warhammer']
      this.proficiency.weapon = weapon
    },
    state: true,
    title: 'Dwarven Combat Training',
    description: 'You have proficiency with the battleaxe, handaxe, light hammer, and warhammer.',
  }

  stonecunning = {
    title: 'Stonecunning.',
    state: true,
    description: 'Whenever you make an Intelligence History check related to the origin of stonework, you are considered proficient in the History skill and add double your proficiency bonus to the check,instead of your normal proficiency bonus',
  }



  constructor(options = {}) {
    super(options)
    this.darkvision.init(60)
    this.speed.init(25)
    this.abilityScoreIncrease.init({ constitution: 2 })

    this.dwarvenCombatTraining.applyIt.call(this)

  }

}
export const dwarf = new Dwarf()
