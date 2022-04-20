import { Elf } from './Elf.js'

export class WoodElf extends Elf {

  elfWeaponTraining = {
    applyIt() {
      const weapon = ['long sword', 'short sword', 'shortbow', 'longbow']
      this.proficiency.weapon = weapon
    },
    state: true,
    title: 'Elf Weapon Training',
    description: 'You have proficiency with the longsword, shortsword, shortbow, and longbow.',
  }

  maskOfTheWild = {
    title: 'Mask Of The Wild',
    state: true,
    description: 'You can attempt to hide even when you are only lightly obscured by foliage, heavy rain, falling snow, mist, and other natural phenomena.',
  }

  fleetOfFoot = {
    title: 'Fleet Of Foot',
    state: true,
    description: 'Your base walking speed increases to 35 feet.',
    applyIt() {
      this.speed.value = 35
    },
  }




  constructor(options) {
    super(options)
    this.fleetOfFoot.applyIt.call(this)
    this.abilityScoreIncrease.init({ wisdom: 1 })
  }
}
export const woodElf = new WoodElf()
