import { WoodElf } from '../../../../core/races/elf/WoodElf.js'
import { sideEffectTrait, pureTrait } from '../../../types.js'
import { testRaceInstance, getInitTraiteType } from '../../../testUtils.js'
import { Race } from '../../../../core/races/Race.js'
import { Elf } from '../../../../core/races/elf/Elf.js'
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
    type: sideEffectTrait,
    test() {
      describe(`${this.name} effect`, () => {
        let elfMockedInstance = null

        beforeEach(() => {
          elfMockedInstance = {
            speed: {
              value: 0,
              init: jest.spyOn(woodElf.speed, 'init'),
            },
          }
        })
        test('fleetOfFoot applyIt should call speed.init function', () => {
          woodElf.fleetOfFoot.applyIt.call(elfMockedInstance)
          expect(elfMockedInstance.speed.init).toBeCalled()
        })
        test('speed score increases by 35', () => {
          woodElf.fleetOfFoot.applyIt.call(elfMockedInstance)
          expect(elfMockedInstance.speed.value).toEqual(35)

        })
      })
    },
  },

  {
    name: 'maskOfTheWild',
    type: pureTrait,
  },
]
testRaceInstance({
  instance: {
    name: 'woodElf',
    value: woodElf,
  },
  constructors: [WoodElf, Elf, Race],
  traits,
})
