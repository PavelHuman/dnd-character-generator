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
    name: 'drowMagic',
    type: sideEffectTrait,
    test() {
      describe('applyIt', () => {
        test('после вызова darkElf.drowMagic.applyIt, внутри darkElf.magic.cantrips появляется dancing Lights', () => {
          const elfMockedInstance = {
            magic: {
              cantrips: {},
            },
          }
          darkElf.drowMagic.applyIt.call(elfMockedInstance)
          expect(elfMockedInstance.magic.cantrips).toHaveProperty('dancingLights', {})
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
