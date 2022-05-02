import { MountainDwarf } from '../core/races/MountainDwarf.js'
import { sideEffectTrait } from './types.js'
import { testRaceInstance, getInitTraiteType } from './utils.js'
import { Race } from '../core/races/Race.js'
import { Dwarf } from '../core/races/Dwarf.js'

const mountainDwarf = new MountainDwarf()

const traits = [
  {
    name: 'dwarvenArmorTraining',
    type: sideEffectTrait,
    test() {
      describe(`${this.name} effect`, () => {
        test('should add expeceted armor to proficency property', () => {
          const dwarfMockedInstance = {
            proficiency: {
              armor: [],
            },
          }
          mountainDwarf[this.name].applyIt.call(dwarfMockedInstance)

          const expectedArmor = ['light', 'medium']
          expect(dwarfMockedInstance.proficiency.armor).toEqual(
            expect.arrayContaining(expectedArmor),
          )
        })
      })
    },
  },
  {
    name: 'abilityScoreIncrease',
    type: getInitTraiteType({ value: expect.any(Object) }),
    test() {
      test('should contains strength: 2', () => {

        expect(mountainDwarf.abilityScoreIncrease.value).toEqual(expect.objectContaining({ strength: 2 }))
      })
    },
  },
]
testRaceInstance({
  instance: {
    name: 'mountainDwarf',
    value: mountainDwarf,
  },
  constructors: [MountainDwarf, Dwarf, Race],
  traits,
})
