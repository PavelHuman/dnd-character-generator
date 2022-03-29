import { HillDwarf } from '../core/races/HillDwarf.js'
import { Dwarf } from '../core/races/Dwarf.js'
import { Race } from '../core/races/Race.js'
import { testInstance, getInitTrateType } from './utils.js'

const hillDwarf = new HillDwarf()

console.log(hillDwarf)
const traits = [
  {
    name: 'abilityScoreIncrease',
    type: getInitTrateType({ value: expect.any(Object) }),
    test() {
      test('should contains wisdom: 1', () => {

        expect(hillDwarf.abilityScoreIncrease.value).toEqual(expect.objectContaining({ wisdom: 1 }))
      })
    },
  },
]

testInstance({
  instance: {
    name: 'hillDwarf',
    value: hillDwarf,
  },
  constructors: [HillDwarf, Dwarf, Race],
  traits,
})

