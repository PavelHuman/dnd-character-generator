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
      describe('init', () => {
        test('darkvision has a radius of 120', () => {
          const elfMockedInstance = {
            darkvision: {
              value: 0,
              init: darkElf.darkvision.init,
            },
          }
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
          darkElf[this.name].applyIt.call(elfMockedInstance)

          const expectedWeapon = ['rapiers', 'short swords', 'hand crossbows']
          expect(elfMockedInstance.proficiency.weapon).toEqual(
            expect.arrayContaining(expectedWeapon),
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
