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

  drowWeaponTraining = {
    applyIt() {
      const weapon = ['rapiers', 'short swords', 'hand crossbows']
      this.proficiency.weapon = weapon
    },
    state: true,
    title: 'DrowWeapon Training',
    description: 'You have proficiency with rapiers, shortswords, and hand crossbows',
  }
  magic = {
    cantrips: {
      dancingLights: {
        state: true,
        title: 'dancing Lights',
        description: 'You know the dancing lights cantrip. When you reach 3rd level, you can cast the faerie fire spell once with this trait and regain the ability to do so when you finish a long rest. When you reach 5th level, you can cast the darkness spell once with this trait and regain the ability to do so when you finish a long rest. Charisma is your spellcasting ability for these spells.',
        applyIt() {
          const cantrip = { dancingLights: 0 }
          this.magic.cantrips = cantrip
        },
      },
    },
  }



  constructor(options) {
    super(options)
    this.magic.cantrips.dancingLights.applyIt.call(this)
    this.superiorDarkvision.applyIt.call(this)
    this.abilityScoreIncrease.init({ charisma: 1 })
  }
}
export const darkElf = new DarkElf()
