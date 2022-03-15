import { diceRoller } from '../../DiceRoller.js'

export const DwarfMixin = Race => class Dwarf extends Race {
  speed = 25

  darkvision = {
    state: true,
    title: 'Darkvision',
    description: 'Accustomed to life underground, you have superior vision in dark and dim conditions. You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. You can\'t discern color in darkness, only shades of gray.'
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
  }


  stonecunning = {
    state: true,
    title: 'Stonecunning',
    description: 'Whenever you make an Intelligence (History) check related to the origin of stonework, you are considered proficient in the History skill and add double your proficiency bonus to the check, instead of your normal proficiency bonus.',
  }

  languages = ['common', 'dwarvish']

  constructor(options = {}) {
    super(options)

    this.increaseAbilityScore({ constitution: 2 })

    this.initProficiencyTools()

    this.applyDwarvenCombatTraining()

    // this.initSubrace(options.subrace)
  }

  initProficiencyTools() {
    const tools = ['smith\'s tools', 'brewer\'s supplies', 'mason\'s tools']
    this.proficiency.tools = [diceRoller.rollKeys(tools)]
  }

  // initSubrace(subrace) {
  //   const subraces = {
  //     'mountain dwarf': () => this.initMountainDwarfSubrace(),
  //   }

  //   subrace ? subraces[subrace]() : subraces[diceRoller.rollKeys(Object.keys(subraces))]()
  // }

  initMountainDwarfSubrace() {
    Object.assign(this, {
      subrace: 'mountain dwarf',
      abilityScoreIncrease: {
        ...this.abilityScoresIncrease,
        strength: 2,
      },
      dwarvenArmorTraining: {
        state: true,
        title: 'Dwarven Armor Training',
        description: 'You have proficiency with light and medium armor.'
      }
    })

    this.applyDwarvenArmorTraining()
  }

  applyDwarvenCombatTraining() {
    Object.assign(this.proficiency, {
      weapon: [
        ...this.proficiency.weapon,
        ...['battleaxe', 'handaxe', 'light hammer', 'warhammer']
      ]
    })
  }

  applyDwarvenArmorTraining() {
    Object.assign(this.proficiency, {
      armor: [
        ...this.proficiency.armor,
        ...['light', 'medium'],
      ],
    })
  }
}
