import { DwarfMixin } from '../core/races/dwarf/DwarfMixin.js'
import { Race } from '../core/races/Race.js'
import { testRaceInstance } from './utils.js'
import { sideEffectTrait, pureTrait } from './types.js'

const Dwarf = DwarfMixin(Race)
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
    type: pureTrait,
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


testRaceInstance({
  instance: {
    name: 'dwarf',
    value: dwarf,
  },
  constructors: [Dwarf, Race],
  traits,
})
