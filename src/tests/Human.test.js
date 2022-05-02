import { phb } from '../core/PlayersHandBook.js'
import { Human } from '../core/races/Human.js'
import { Race } from '../core/races/Race.js'
import { testRaceInstance } from './utils.js'
import { mapObject } from './utils.js'


const human = new Human()

const traits = [
]

describe('Human', () => {
  test('abilityScoreIncrease', () => {
    const abilities = mapObject(phb.getAbilities(), () => 1)

    expect(human.abilityScoreIncrease.value).toEqual(mapObject(abilities, () => 1))
  })
})

testRaceInstance({
  instance: {
    name: 'human',
    value: human,
  },
  constructors: [Human, Race],
  traits,
})
