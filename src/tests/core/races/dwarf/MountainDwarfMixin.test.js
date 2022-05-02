import { MountainDwarfMixin } from '../../../../core/races/dwarf/MountainDwarfMixin.js'
import { sideEffectTrait } from '../../../types.js'
import { testRaceInstance, getInitTraiteType } from '../../../testUtils.js'
import { Race } from '../../../../core/races/Race.js'
import { DwarfMixin } from '../../../../core/races/dwarf/DwarfMixin.js'

const Dwarf = DwarfMixin(Race)
const MountainDwarf = MountainDwarfMixin(Dwarf)
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