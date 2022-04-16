import { WoodElf } from '../core/races/WoodElf.js'
import { sideEffectTrait, pureTrait } from './types.js'
import { testInstance, getInitTraiteType } from './utils.js'
import { Race } from '../core/races/Race.js'
import { Elf } from '../core/races/Elf.js'

const woodElf = new WoodElf()

const traits = [
  {
    name: 'abilityScoreIncrease',
    type: getInitTraiteType({ value: expect.any(Object) }),
    test() {
      test('wisdom score increases by 1', () => {

        expect(woodElf.abilityScoreIncrease.value).toEqual(expect.objectContaining({ wisdom: 1 }))
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
          woodElf[this.name].applyIt.call(elfMockedInstance)

          const expectedWeapon = ['long sword', 'short sword', 'shortbow', 'longbow']
          expect(elfMockedInstance.proficiency.weapon).toEqual(
            expect.arrayContaining(expectedWeapon),
          )
        })
      })
    },
  },
  {
    name: 'fleetOfFoot',
    type: getInitTraiteType({
      value: expect.any(Number),
    }),
    test() {
      describe('init', () => {
        const mockedRace = {
          speed: {
            value: 30,
            init: woodElf.speed.init,
          },
        }

        test('should apply received speed value', () => {
          const speed = 30
          mockedRace.speed.init(speed)

          expect(mockedRace.speed.value).toBe(speed)
        })
        test('speed score increases by 5', () => {
          const speed = 30
          mockedRace.speed.init(speed)
          expect(mockedRace.speed.value).toBe(speed + 5)
        })
      })
    },
  },

  {
    name: 'maskOfTheWild',
    type: pureTrait,
  },
]
testInstance({
  instance: {
    name: 'woodElf',
    value: woodElf,
  },
  constructors: [WoodElf, Elf, Race],
  traits,
})
