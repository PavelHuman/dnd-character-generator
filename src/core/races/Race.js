export class Race {
  age = 0
  hitPointMaximumIncrease = 0
  alignment = ''
  speed = 25
  size = {
    type: '',
    value: 0,
  }

  languages = []
  subraces = []
  proficiency = {
    tools: [],
    weapon: [],
    armor: [],
  }

  constructor(options = {}) {
    this.initAge(options.age)
  }

  initAge(age) {
    this.age = age ?? 18
  }
}

export const race = new Race()
console.log({ race })
