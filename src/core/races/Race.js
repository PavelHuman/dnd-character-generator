import { diceRoller } from '../DiceRoller.js'

export class Race {
  age = {
    value: 0,
    init(age) {
      function getRangomAge() {
        return 50 + Math.ceil(Math.random() * (400 - 50))
      }

      if (age) {
        this.value = age < 50 ? getRangomAge() : age

        return
      }

      this.value = getRangomAge()
    },
  }

  hitPointMaximumIncrease = 0

  alignment = {
    value: 'neutral',
    init(alignment) {
      const alignments = ['neutralGood', 'chaoticGood', 'lawfulNeutral', 'neutral', 'chaoticNeutral', 'lawfulEvil', 'neutralEvil', 'chaoticEvil']

      this.value = alignment ?? alignments[Math.floor(Math.random() * alignments.length)]
    },
  }

  speed = {
    value: 0,
    init(speed) {
      this.value = speed ?? 30
    },
  }

  size = {
    type: '',
    value: 0,
    init(size) {
      if (this.value <= 65) {
        this.value = size ?? 66 + Math.ceil(Math.random() * (244 - 66))
      }
    },
  }

  abilityScoreIncrease = {
    value: {},
    init(abilityToIncrease = {}) {
      Object.entries(abilityToIncrease).forEach(([abilityName, abilityValue]) => {
        if (this.value[abilityName]) {
          this.value[abilityName] = this.value[abilityName] + abilityValue

          return
        }

        this.value[abilityName] = abilityValue
      })
    },
  }

  languages = []

  subraces = []

  proficiency = {
    tools: [],
    weapon: [],
    armor: [],
  }

  constructor(options = {}) {
    this.age.init(options.age)
    this.size.init(options.size)
    this.speed.init(options.speed)
    this.alignment.init(options.alignment)
    this.abilityScoreIncrease.init(options.abilityScoreIncrease)
  }

  initProficiencyTools(tools) {
    this.proficiency.tools = [diceRoller.rollKeys(tools)]
  }
}

export const race = new Race()
