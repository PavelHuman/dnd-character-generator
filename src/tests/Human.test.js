import { Human } from '../core/races/Human.js'
import { Race } from '../core/races/Race.js'
import { testInstance } from './utils.js'


const human = new Human()

const traits = [

]

testInstance({
  instance: {
    name: 'human',
    value: human,
  },
  constructors: [Human, Race],
  traits,
})
