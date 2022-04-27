import { Halfling } from './Halfling.js'

export class Lightfoot extends Halfling {

  naturallyStealthy = {
    state: true,
    title: 'Naturally Stealthy',
    description: ' You can attempt to hide even when you are obscured only by a creature that is at least one size larger than you.',
  }






  constructor(options) {
    super(options)
    this.abilityScoreIncrease.init({ charisma: 1 })
  }
}
export const lightfoot = new Lightfoot()
