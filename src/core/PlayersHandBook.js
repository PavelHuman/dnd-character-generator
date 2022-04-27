import { diceRoller as diceRoller } from './DiceRoller.js'
import { HillDwarf } from './races/HillDwarf.js'
import { MountainDwarf } from './races/MountainDwarf.js'
import { HighElf } from './races/HighElf.js'
import { WoodElf } from './races/WoodElf.js'
import { DarkElf } from './races/DarkElf.js'
import { Lightfoot } from './races/Lightfoot.js'

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

  raceFactory(race, subrace) {
    if (race === 'dwarf') {
      if (subrace === 'hill dwarf') {
        return new HillDwarf({ subrace })
      }
      if (subrace === 'mountain dwarf') {
        return new MountainDwarf({ subrace })
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

      if (subrace === 'lightfoot') {
        return new Lightfoot({ subrace })
      }
    }
  }
}
export const phb = new PlayersHandBook()


