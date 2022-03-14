import { diceRoller } from '../DiceRoller.js'
import Race from './Race.js'

class Dwarf extends Race {
  abilityScoreIncrease = {
    constitution: 2,
  }

  hitPointMaximumIncrease = 0

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
    this.initProficiencyTools()

    this.applyDwarvenCombatTraining()

    this.initSubrace(options.subrace)
  }

  initProficiencyTools() {
    const tools = ['smith\'s tools', 'brewer\'s supplies', 'mason\'s tools']
    this.proficiency.tools = [diceRoller.rollKeys(tools)]
  }

  initSubrace(subrace) {
    const subraces = {
      'hill dwarf': () => this.initHillDwarfSubrace(),
      'mountain dwarf': () => this.initMountainDwarfSubrace(),
    }

    subrace ? subraces[subrace]() : subraces[diceRoller.rollKeys(Object.keys(subraces))]()
  }

  initHillDwarfSubrace() {
    Object.assign(this, {
      subrace: 'hill dwarf',
      abilityScoreIncrease: {
        ...this.abilityScoreIncrease,
        wisdom: 1,
      },
      dwarvenToughness: {
        state: true,
        title: 'Dwarven Toughness',
        description: 'Your hit point maximum increases by 1, and it increases by 1 every time you gain a level.'
      }
    })

    this.applyDwarvenToughness()
  }

  initMountainDwarfSubrace() {
    Object.assign(this, {
      subrace: 'mountain dwarf',
      abilityScoreIncrease: {
        ...this.abilityScoreIncrease,
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

  applyDwarvenToughness() {
    Object.assign(this, {
      hitPointMaximumIncrease: this.hitPointMaximumIncrease + 1
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

export default Dwarf
