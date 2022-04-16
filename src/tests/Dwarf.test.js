import { Dwarf } from '../core/races/Dwarf.js'
import { Race } from '../core/races/Race.js'
import { getInitTraiteType, testInstance } from './utils.js'
import { sideEffectTrait, pureTrait } from './types.js'

const dwarf = new Dwarf()

const traits = [
  {
    name: 'dwarvenCombatTraining',
    type: sideEffectTrait,
    test() {
      describe(`${this.name} effect`, () => {
        test('should add expeceted weapon to proficency property', () => {
          const dwarfMockedInstance = {
            proficiency: {
              weapon: [],
            },
          }
          dwarf[this.name].applyIt.call(dwarfMockedInstance)

          const expectedWeapon = ['battleaxe', 'handaxe', 'light hammer', 'warhammer']
          expect(dwarfMockedInstance.proficiency.weapon).toEqual(
            expect.arrayContaining(expectedWeapon),
          )
        })
      })
    },
  },

  {
    name: 'darkvision',
    type: getInitTraiteType({
      ...pureTrait,
      value: expect.any(Number),
    }),
  },
  {
    name: 'dwarvenResilience',
    type: pureTrait,
  },
  {
    name: 'stonecunning',
    type: pureTrait,
  },
]


testInstance({
  instance: {
    name: 'dwarf',
    value: dwarf,
  },
  constructors: [Dwarf, Race],
  traits,
})
