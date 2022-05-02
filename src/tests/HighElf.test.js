import { HighElf } from '../core/races/HighElf.js'
import { Elf } from '../core/races/Elf.js'
import { Race } from '../core/races/Race.js'
import { testRaceInstance, getInitTraiteType } from './utils.js'
import { sideEffectTrait, pureTrait } from './types.js'

const highElf = new HighElf()

const traits = [
  {
    name: 'abilityScoreIncrease',
    type: getInitTraiteType({ value: expect.any(Object) }),
    test() {
      test('should contains intelligence: 1', () => {

        expect(highElf.abilityScoreIncrease.value).toEqual(expect.objectContaining({ intelligence: 1 }))
      })
    },
  },

  {
    name: 'elfWeaponTraining',
    type: sideEffectTrait,
    test() {
      describe(`${this.name} effect`, () => {
        test('should add expeceted weapon to proficency property', () => {
          const elfMockedInstance = {
            proficiency: {
              weapon: [],
            },
          }
          highElf[this.name].applyIt.call(elfMockedInstance)

          const expectedWeapon = ['long sword', 'short sword', 'shortbow', 'longbow']
          expect(elfMockedInstance.proficiency.weapon).toEqual(
            expect.arrayContaining(expectedWeapon),
          )
        })
      })
    },
  },

  {
    name: 'cantrip',
    type: pureTrait,
  },
  {
    name: 'extraLanguage',
    type: pureTrait,
  },
]


testRaceInstance({
  instance: {
    name: 'highElf',
    value: highElf,
  },
  constructors: [HighElf, Elf, Race],
  traits,
})
