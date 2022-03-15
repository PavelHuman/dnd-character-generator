class Race {
  hitPointMaximumIncrease = 0

  proficiency = {
    tools: [],
    weapon: [],
    armor: [],
  }

  abilityScoreIncrease = {}

  constructor(options = {}) {
    this.initAge(options.age)
    this.initAlignment(options.alignment)
    this.initSize(options.size)
  }

  initAge(age) {
    const min = 18
    const max = 450
    this.age = age ? age : Math.ceil(min + Math.random() * (max - min))
  }

  initAlignment(alignment) {
    this.alignment = alignment
  }

  initSize(size) {
    this.size = size
  }

  increaseAbilityScore(abilityScoreToIncrease) {
    this.abilityScoreIncrease = {
      ...this.abilityScoreIncrease,
      ...(Object.entries(abilityScoreToIncrease).reduce((acc, current) => {
        const [ability, value] = current

        acc[ability] = (this.abilityScoreIncrease[ability] || 0) + value

        return acc
      }, {})),
    }
  }
}

export default Race
