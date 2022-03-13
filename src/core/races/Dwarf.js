import { diceRoller } from '../DiceRoller.js'

class Dwarf {
  abilityScoreIncrease = {
    constitution: 2,
  }

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

  proficiency = {
    tools: ['smith\'s tools', 'brewer\'s supplies', 'mason\'s tools'],
    weapon: ['battleaxe', 'handaxe', 'light hammer', 'warhammer'],
    armor: [],
  }

  stonecunning = {
    state: true,
    title: 'Stonecunning',
    description: 'Whenever you make an Intelligence (History) check related to the origin of stonework, you are considered proficient in the History skill and add double your proficiency bonus to the check, instead of your normal proficiency bonus.',
  }

  languages = ['common', 'dwarvish']

  constructor(options = {}) {
    this.initProficiencyTools()
    this.initSubrace(options.subrace)
  }

  initProficiencyTools() {
    this.proficiency.tools = [this.proficiency.tools[diceRoller.rollDice(this.proficiency.tools.length) - 1]]
  }

  initSubrace(subrace) {
    switch (subrace) {
      case 'hill dwarf': {
        Object.assign(this, {
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

        break
      }
      case 'mountain dwarf': {
        Object.assign(this, {
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

        break
      }
      default: return
    }
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
