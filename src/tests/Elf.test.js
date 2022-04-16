import { Elf } from '../core/races/Elf.js'
import { Race } from '../core/races/Race.js'
import { getInitTraiteType, testInstance } from './utils.js'
import { pureTrait } from './types.js'

const elf = new Elf()

const traits = [

  {
    name: 'darkvision',
    type: getInitTraiteType({
      ...pureTrait,
      value: expect.any(Number),
    }),
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
