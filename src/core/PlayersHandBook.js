import { diceRoller as diceRoller } from './DiceRoller.js'
import { HillDwarf } from './races/HillDwarf.js'
import { MountainDwarf } from './races/MountainDwarf.js'

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
  getRacialTraits(race, options = {}) {
    if (race === 'dwarf') {
      if (options.subrace === 'hill dwarf') {
        return new HillDwarf(options)
      }
      if (options.subrace === 'mountain dwarf') {
        return new MountainDwarf(options)
      }
    }
  }
  raceFactory() {
  }

}
export const phb = new PlayersHandBook()


