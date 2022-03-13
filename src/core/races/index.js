import Dwarf from './Dwarf.js'

export const raceFactory = (race, options) => {
  switch (race) {
    case 'dwarf': return new Dwarf(options)
    default: return {}
  }
}
