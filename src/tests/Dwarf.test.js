import { Dwarf } from '../core/races/Dwarf.js'
import { Race } from '../core/races/Race.js'
import { testInstance } from './utils.js'
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
          dwarf[this.name].applyIt.call(dwarfMockedInstance)

          const expectedArmor = ['light', 'medium']
          expect(dwarfMockedInstance.proficiency.armor).toEqual(
            expect.arrayContaining(expectedArmor),
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


testInstance({
  instance: {
    name: 'dwarf',
    value: dwarf,
  },
  constructors: [Dwarf, Race],
  traits,
})
