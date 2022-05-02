import { HillDwarfMixin } from '../../../../core/races/dwarf/HillDwarfMixin.js'
import { DwarfMixin } from '../../../../core/races/dwarf/DwarfMixin.js'
import { Race } from '../../../../core/races/Race.js'
import { testRaceInstance, getInitTraiteType } from '../../../testUtils.js'
import { sideEffectTrait } from '../../../types.js'

const Dwarf = DwarfMixin(Race)
const HillDwarf = HillDwarfMixin(Dwarf)
const hillDwarf = new HillDwarf()

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

testRaceInstance({
  instance: {
    name: 'hillDwarf',
    value: hillDwarf,
  },
  constructors: [HillDwarf, Dwarf, Race],
  traits,
})

