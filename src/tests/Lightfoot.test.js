import { Lightfoot } from '../core/races/Lightfoot.js'
import { Halfling } from '../core/races/Halfling.js'
import { Race } from '../core/races/Race.js'
import { testRaceInstance } from './utils.js'
import { pureTrait } from './types.js'

const lightfoot = new Lightfoot()

const traits = [
  {
    name: 'naturallyStealthy',
    type: pureTrait,
  },
]

testRaceInstance({
  instance: {
    name: 'lightfoot',
    value: lightfoot,
  },
  constructors: [Lightfoot, Halfling, Race],
  traits,
})
