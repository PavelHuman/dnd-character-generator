import { Elf } from './Elf.js'

export class HighElf extends Elf {

  elfWeaponTraining = {
    applyIt() {
      const weapon = ['long sword', 'short sword', 'shortbow', 'longbow']
      this.proficiency.weapon = weapon
    },
    state: true,
    title: 'Elf Weapon Training',
    description: 'You have proficiency with the longsword, shortsword, shortbow, and longbow.',
  }

  cantrip = {
    title: 'Cantrip',
    state: true,
    description: 'You know one cantrip of your choice from the wizard spell list. Intelligence is your spellcasting ability for it',
  }
  extraLanguage = {
    title: 'Extra Language',
    state: true,
    description: 'You can speak, read, and write one extra language of your choice',
  }

  constructor(options) {
    super(options)
    this.abilityScoreIncrease.init({ intelligence: 1 })
  }
}
export const highElf = new HighElf()
