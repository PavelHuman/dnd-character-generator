import { Elf } from '../core/races/Elf.js'
import { Race } from '../core/races/Race.js'
import { testInstance } from './utils.js'
import { pureTrait } from './types.js'

const elf = new Elf()

const traits = [

  {
    name: 'darkvision',
    type: pureTrait,
  },
  {
    name: 'keenSenses',
    type: pureTrait,
  },
  {
    name: 'feyAncestry',
    type: pureTrait,
  },
  {
    name: 'trance',
    type: pureTrait,
  },
]


testInstance({
  instance: {
    name: 'elf',
    value: elf,
  },
  constructors: [Elf, Race],
  traits,
})
