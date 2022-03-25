export class Race {
  age = 0
  hitPointMaximumIncrease = 0
  alignment = ''
  speed = 25
  size = {
    type: '',
    value: 0,
  }
  abilityScoreIncrease = { constitution: 2 }
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
    this.initAbilityScoreIncrease(options.abilityScoreIncrease)
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
    this.proficiency.tools = proficiency
    this.proficiency.weapon = proficiency
    this.proficiency.armor = proficiency
  }
  initAlignment(alignment) {
    let array = ['neutralGood', 'chaoticGood', 'lawfulNeutral', 'neutral', 'chaoticNeutral', 'lawfulEvil', 'neutralEvil', 'chaoticEvil']
    if (this.alignment == '') {
      this.alignment = alignment ?? '' + array[Math.floor(Math.random() * array.length)]
    }
  }
  initAbilityScoreIncrease(abilityScoreIncrease) {

  }
}

export const race = new Race()
