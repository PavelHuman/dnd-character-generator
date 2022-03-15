import { DwarfMixin, dwarvenSubraces } from './dwarf/index.js'
import Race from './Race.js'
import { diceRoller } from '../DiceRoller.js'

const applyMixins = (Base, defaultMixin, ...mixins) => [defaultMixin, ...mixins].reduce((acc, mixin) => mixin(acc), Base)
const getSubraceMixin = (subraces, options) => options.subrace ? subraces[options.subrace] : subraces[diceRoller.rollKeys(Object.keys(subraces))]

export const raceFactory = (race, options) => {
  switch (race) {
    case 'dwarf': return new (applyMixins(Race, DwarfMixin, getSubraceMixin(dwarvenSubraces, options)))(options)
    default: return {}
  }
}
