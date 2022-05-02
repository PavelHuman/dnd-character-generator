import { Halfling } from './Halfling.js'

export class Stout extends Halfling {

  stoutResilience = {
    state: true,
    title: 'Stout Resilience',
    description: 'You have advantage on saving throws against poison, and you have resistance against poison damage',
  }


  constructor(options) {
    super(options)
    this.abilityScoreIncrease.init({ constitution: 1 })
  }
}
export const stout = new Stout()
