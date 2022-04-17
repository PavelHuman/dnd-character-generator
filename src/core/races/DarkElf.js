import { Elf } from './Elf.js'

export class DarkElf extends Elf {

  superiorDarkvision = {
    title: 'Superior Darkvision',
    state: true,
    description: 'Your darkvision has a radius of 120 feet.',
    applyIt() {
      this.darkvision.init(120)
    },
  }









  constructor(options) {
    super(options)
    this.superiorDarkvision.applyIt.call(this)
    this.abilityScoreIncrease.init({ charisma: 1 })
  }
}
export const darkElf = new DarkElf()
