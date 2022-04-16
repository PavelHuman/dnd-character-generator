import { diceRoller } from './DiceRoller.js'
import { Race } from './races/Race.js'
import { DwarfMixin, dwarvenSubraces } from './races/dwarf/index.js'
import coreUtils from './coreUtils.js'

class PlayersHandBook {
  getAbilityScore() {
    return diceRoller.rollDices('4d6')
      .slice().sort((a, b) => b - a)
      .slice(0, 3)
      .reduce((acc, current) => acc + current, 0)
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
    return this.raceFactory(race, options)
  }

  raceFactory(race, options) {
    switch (race) {
      case 'dwarf': return new (coreUtils.applyMixins(Race, DwarfMixin, this.getSubraceMixin(dwarvenSubraces, options))[0])(options)
      default: return {}
    }
  }

  getSubraceMixin(subraces, options) {
    return options.subrace ? subraces[options.subrace] : subraces[diceRoller.rollKeys(Object.keys(subraces))]
  }
}

export const phb = new PlayersHandBook()
