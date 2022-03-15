class Race {
  hitPointMaximumIncrease = 0

  proficiency = {
    tools: [],
    weapon: [],
    armor: [],
  }

  abilityScoresIncrease = {}

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

  initAbilityScoresIncrese(abilityScoresToIncrease) {
    this.abilityScoresIncrease = {
      ...this.abilityScoresIncrease,
      ...(Object.entries(abilityScoresToIncrease).reduce((acc, current) => {
        const [ability, value] = current

        acc[ability] = (this.abilityScoresIncrease[ability] || 0) + value

        return acc
      }, {})),
    }
  }
}

export default Race
