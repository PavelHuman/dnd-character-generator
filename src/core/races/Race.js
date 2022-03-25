export class Race {
  age = 0

  hitPointMaximumIncrease = 0

  alignment = 'neutral'

  speed = 0

  size = {
    type: '',
    value: 0,
  }

  abilityScoreIncrease = {}

  languages = []

  subraces = []

  proficiency = {
    tools: [],
    weapon: [],
    armor: [],
  }

  constructor(options = {}) {
    this.initAge(options.age)
    this.initSize(options.size)
    this.initAlignment(options.alignment)
    this.increaseAbilityScore(options.abilityScoreIncrease)
  }

  initAge(age) {
    function getRangomAge() {
      return 50 + Math.ceil(Math.random() * (400 - 50))
    }

    if (age) {
      this.age = age < 50 ? getRangomAge() : age

      return
    }

    this.age = getRangomAge()
  }

  initSize(size) {
    if (this.size.value <= 65) {
      this.size.value = size ?? 66 + Math.ceil(Math.random() * (244 - 66))
    }
  }

  initAlignment(alignment) {
    const alignments = ['neutralGood', 'chaoticGood', 'lawfulNeutral', 'neutral', 'chaoticNeutral', 'lawfulEvil', 'neutralEvil', 'chaoticEvil']

    this.alignment = alignment ?? alignments[Math.floor(Math.random() * alignments.length)]
  }

  increaseAbilityScore(abilityToIncrease = {}) {
    Object.entries(abilityToIncrease).forEach(([key, value]) => {
      if (this.abilityScoreIncrease[key]) {
        this.abilityScoreIncrease[key] = this.abilityScoreIncrease[key] + value

        return
      }

      this.abilityScoreIncrease[key] = value
    })
  }
}

export const race = new Race()
