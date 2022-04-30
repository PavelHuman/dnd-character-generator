import { Race } from './Race.js'

export class Human extends Race {

  languages = ['common', 'oreCurses', 'elvishMusicalExpressions', 'dwarfMilitaryPhrases']




  constructor(options = {}) {
    super(options)

    this.speed.init(30)
    this.abilityScoreIncrease.init({ allCharacteristics: 1 })
  }
}
export const human = new Human()
