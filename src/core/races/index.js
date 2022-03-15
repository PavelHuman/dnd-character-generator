import { DwarfMixin, HillDwarfMixin } from './dwarf/index.js'
import Race from './Race.js'

const applyMixins = (Base, defaultMixin, ...mixins) => [defaultMixin, ...mixins].reduce((acc, mixin) => mixin(acc), Base)

export const raceFactory = (race, options) => {
  switch (race) {
    case 'dwarf': {
      return new (applyMixins(Race, DwarfMixin, HillDwarfMixin))(options)
    }
    default: return {}
  }
}
