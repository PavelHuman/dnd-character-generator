import { Stout } from '../core/races/Stout.js'
import { Halfling } from '../core/races/Halfling.js'
import { Race } from '../core/races/Race.js'
import { testRaceInstance } from './utils.js'
import { pureTrait } from './types.js'

const stout = new Stout()

const traits = [
  {
    name: 'stoutResilience',
    type: pureTrait,
  },
]
testRaceInstance({
  instance: {
    name: 'stout',
    value: stout,
  },
  constructors: [Stout, Halfling, Race],
  traits,
})
