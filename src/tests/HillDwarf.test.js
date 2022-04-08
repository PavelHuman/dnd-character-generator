import { HillDwarf } from '../core/races/HillDwarf.js'
import { Dwarf } from '../core/races/Dwarf.js'
import { Race } from '../core/races/Race.js'
import { testInstance, getInitTraiteType } from './utils.js'
import { sideEffectTrait } from './types.js'

const hillDwarf = new HillDwarf()

console.log(hillDwarf)
const traits = [
  {
    name: 'abilityScoreIncrease',
    type: getInitTraiteType({ value: expect.any(Object) }),
    test() {
      test('should contains wisdom: 1', () => {

        expect(hillDwarf.abilityScoreIncrease.value).toEqual(expect.objectContaining({ wisdom: 1 }))
      })
    },
  },
  {
    name: 'dwarvenToughness',
    type: sideEffectTrait,
    test() {
      describe(`${this.name} effect`, () => {
        test('should add expeceted increase hit point maximum by 1', () => {
          const dwarfMockedInstance = {
            hitPointMaximumIncrease: 0,
          }

          hillDwarf[this.name].applyIt.call(dwarfMockedInstance)

          expect(dwarfMockedInstance.hitPointMaximumIncrease).toEqual(hillDwarf.hitPointMaximumIncrease)
        })
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

