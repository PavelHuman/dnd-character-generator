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
    this.initProficiency(options.proficiency)
    this.initAge(options.age)
    this.initSize(options.size)
    this.initAlignment(options.alignment)
  }

  initAge(age) {
    if (this.age <= 49) {
      this.age = age ?? 50 + Math.ceil(Math.random() * (400 - 50))
    }
  }

  initSize(size) {
    if (this.size.value <= 65) {
      this.size.value = size ?? 66 + Math.ceil(Math.random() * (244 - 66))
    }
  }
  initProficiency(proficiency) {

  }
  initAlignment(alignment) {

  }
}


export const race = new Race()
console.log({ race })
