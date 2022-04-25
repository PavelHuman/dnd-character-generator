import { Race } from './Race.js'

export class Halfling extends Race {

  languages = ['common', 'halfting']

  subraces = ['lightfoot', 'stout']

  brave = {
    state: true,
    title: 'Brave',
    description: 'You have advantage on saving throws against being frightened.',
  }

  halflingNimbleness = {
    state: true,
    title: 'Halfling Nimbleness',
    description: 'You can move through the space of any creature that is of a size larger than yours.',
  }







  constructor(options = {}) {
    super(options)
    this.abilityScoreIncrease.init({ dexterity: 2 })
    this.speed.init(25)

  }
}
export const halfling = new Halfling()
