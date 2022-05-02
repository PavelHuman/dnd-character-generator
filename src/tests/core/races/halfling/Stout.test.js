import { Stout } from '../../../../core/races/halfling/Stout.js'
import { Halfling } from '../../../../core/races/halfling/Halfling.js'
import { Race } from '../../../../core/races/Race.js'
import { testRaceInstance } from '../../../test-utils.js'
import { pureTrait } from '../../../types.js'

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
