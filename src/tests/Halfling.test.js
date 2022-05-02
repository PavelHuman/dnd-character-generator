import { Halfling } from '../core/races/Halfling.js'
import { Race } from '../core/races/Race.js'
import { testRaceInstance } from './utils.js'
import { pureTrait } from './types.js'

const halfling = new Halfling()

const traits = [
  {
    name: 'brave',
    type: pureTrait,
  },
  {
    name: 'halflingNimbleness',
    type: pureTrait,
  },
  {
    name: 'lucky',
    type: pureTrait,
  },
]

testRaceInstance({
  instance: {
    name: 'halfling',
    value: halfling,
  },
  constructors: [Halfling, Race],
  traits,
})
