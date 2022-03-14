class Race {
  proficiency = {
    tools: [],
    weapon: [],
    armor: [],
  }

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
}

export default Race
