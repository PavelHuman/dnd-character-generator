import Dwarf from './Dwarf.js'

export const raceFactory = (race, options) => {
  switch (race) {
    case 'dwarf': return new Dwarf(options)
    default: return {}
  }
}

export const subraceFactory = (subrace, race) => {
  switch (subrace) {
    case 'hill dwarf':
    default: return
  }
}
