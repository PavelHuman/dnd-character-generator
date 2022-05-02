import { Race } from './Race.js'
import { phb } from '../PlayersHandBook.js'
import { mapObject } from '../../utils.js'
export class Human extends Race {

  languages = ['common', 'oreCurses', 'elvishMusicalExpressions', 'dwarfMilitaryPhrases']




  constructor(options = {}) {
    super(options)

    this.speed.init(30)
    this.abilityScoreIncrease.init(mapObject(phb.getAbilities(), () => 1))
  }
}
export const human = new Human()
