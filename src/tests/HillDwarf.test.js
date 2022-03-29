import { HillDwarf } from '../core/races/HillDwarf.js'
import { Dwarf } from '../core/races/Dwarf.js'
import { Race } from '../core/races/Race.js'
import { testInstance } from './utils.js'

const hillDwarf = new HillDwarf()

// console.log(hillDwarf)
const traits = []

testInstance({
  instance: {
    name: 'hillDwarf',
    value: hillDwarf,
  },
  constructors: [HillDwarf, Dwarf, Race],
  traits,
})
