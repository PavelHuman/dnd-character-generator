import { DwarfMixin, HillDwarfMixin, MountainDwarfMixin } from './dwarf/index.js'
import Race from './Race.js'
import { diceRoller } from '../DiceRoller.js'

const applyMixins = (Base, defaultMixin, ...mixins) => [defaultMixin, ...mixins].reduce((acc, mixin) => mixin(acc), Base)
const getSubraceMixin = (subraces, options) => options.subrace ? subraces[options.subrace] : subraces[diceRoller.rollKeys(Object.keys(subraces))]

export const raceFactory = (race, options) => {
  switch (race) {
    case 'dwarf': {
      const subraces = {
        'hill dwarf': HillDwarfMixin,
        'mountain dwarf': MountainDwarfMixin,
      }

      return new (applyMixins(Race, DwarfMixin, getSubraceMixin(subraces, options)))(options)
    }
    default: return {}
  }
}
