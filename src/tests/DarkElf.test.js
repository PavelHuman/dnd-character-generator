import { DarkElf } from '../core/races/DarkElf.js'
import { Elf } from '../core/races/Elf.js'
import { Race } from '../core/races/Race.js'
import { testInstance } from './utils.js'
import { sideEffectTrait } from './types.js'

const darkElf = new DarkElf()

const traits = [
  {
    name: 'superiorDarkvision',
    type: sideEffectTrait,
    test() {
      describe(`${this.name} effect`, () => {
        let elfMockedInstance = null

        beforeEach(() => {
          elfMockedInstance = {
            darkvision: {
              value: 0,
              init: jest.spyOn(darkElf.darkvision, 'init'),
            },
          }
        })
        test('superiorDarkvision.applyIt should call darkvision.init function', () => {
          darkElf.superiorDarkvision.applyIt.call(elfMockedInstance)
          expect(elfMockedInstance.darkvision.init).toBeCalled()
        })
        test('darkvision has a radius of 120', () => {
          darkElf.superiorDarkvision.applyIt.call(elfMockedInstance)
          expect(elfMockedInstance.darkvision.value).toEqual(120)
        })
      })
    },
  },
  {

    name: 'drowWeaponTraining',
    type: sideEffectTrait,
    test() {
      describe(`${this.name} effect`, () => {
        test('should add expeceted weapon to proficency property', () => {
          const elfMockedInstance = {
            proficiency: {
              weapon: [],
            },
          }
          darkElf.drowWeaponTraining.applyIt.call(elfMockedInstance)

          const expectedWeapon = ['rapiers', 'short swords', 'hand crossbows']
          expect(elfMockedInstance.proficiency.weapon).toEqual(
            expect.arrayContaining(expectedWeapon),
          )
        })
      })
    },
  },

  {
    name: 'magic',
    type: sideEffectTrait,
    test() {
      describe(`${this.name} effect`, () => {
        test('should add expected cantrips to skill property', () => {
          const elfMockedInstance = {
            magic: {
              cantrips: {},
            },
          }
          darkElf.magic.cantrips.dancingLights.applyIt.call(elfMockedInstance)

          const expectedCantrips = {
            dancingLights: 0,
          }
          expect(elfMockedInstance.magic.cantrips).toEqual(
            expect.objectContaining(expectedCantrips),
          )
        })
      })
    },
  },
]



testInstance({
  instance: {
    name: 'darkElf',
    value: darkElf,
  },
  constructors: [DarkElf, Elf, Race],
  traits,
})
