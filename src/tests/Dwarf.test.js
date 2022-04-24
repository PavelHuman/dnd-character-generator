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
    test() {
      describe('init', () => {
        const mockedElf = {
          darkvision: {
            init: dwarf.darkvision.init,
            state: true,
            description: 'Accustomed to life underground, you have superior vision in dark and dim conditions. You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. You cant discern color in darkness, only shades of gray,title: Darkvision',
            value: 0,
          },
        }
        test('dark vision value should be 60', () => {
          mockedElf.darkvision.init(60)
          expect(mockedElf.darkvision.value).toBe(60)
        })
      })
    },
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
