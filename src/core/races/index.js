import { DwarfMixin } from './dwarf/index.js'
import Race from './Race.js'

const applyMixins = (Base, DefaultMixin, ...mixins) => [DefaultMixin, ...mixins].reduce((acc, mixin) => mixin(acc), Base)

export const raceFactory = (race, options) => {
  switch (race) {
    case 'dwarf': {
      return new (applyMixins(Race, DwarfMixin))(options)
    }
    default: return {}
  }
}
