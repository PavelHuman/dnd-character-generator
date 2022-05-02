import { diceRoller } from './DiceRoller.js'
import { HillDwarfMixin } from './races/dwarf/HillDwarfMixin.js'
import { MountainDwarfMixin } from './races/dwarf/MountainDwarfMixin.js'
import { HighElf } from './races/elf/HighElf.js'
import { WoodElf } from './races/elf/WoodElf.js'
import { DarkElf } from './races/elf/DarkElf.js'
import { Lightfoot } from './races/halfling/Lightfoot.js'
import { Stout } from './races/halfling/Stout.js'
import coreUtils from './coreUtils.js'
import { Race } from './races/Race.js'
import { DwarfMixin } from './races/dwarf/DwarfMixin.js'

const getRandomSubrace = (race) => { console.log('generate random subrace', race) }

class PlayersHandBook {
  getAbilityScore() {
    const rolln4d6 = diceRoller.rollDices('4d6')
    const sorted = rolln4d6.slice().sort((a, b) => a - b)
    const firstMaxThree = sorted.reverse().slice(0, 3)
    const sum = firstMaxThree.reduce((acc, current) => acc + current, 0)
    return sum
  }
  getAbilities() {
    return {
      strength: null,
      dexterity: null,
      constituion: null,
      intelligence: null,
      wisdom: null,
      charisma: null,
    }
  }

  getRacialTraits(race, options) {
    return this.raceFactory(race, options.subrace)
  }

  raceFactory(race, subrace = getRandomSubrace(race)) {
    getRandomSubrace(race)

    if (race === 'dwarf') {
      if (subrace === 'hill dwarf') {
        return new (coreUtils.applyMixins(Race, DwarfMixin, HillDwarfMixin))()
      }
      if (subrace === 'mountain dwarf') {
        return new (coreUtils.applyMixins(Race, DwarfMixin, MountainDwarfMixin))()
      }
    }
    if (race === 'elf') {

      if (subrace === 'high elf') {
        return new HighElf({ subrace })
      }
      if (subrace === 'wood elf') {
        return new WoodElf({ subrace })
      }
      if (subrace === 'dark elf') {
        return new DarkElf({ subrace })
      }
    }
    if (race === 'halfling') {

      if (subrace === 'lightfoot halfling') {
        return new Lightfoot({ subrace })
      }
      if (subrace === 'stout halfling') {
        return new Stout({ subrace })
      }
    }
  }
}
export const phb = new PlayersHandBook()


