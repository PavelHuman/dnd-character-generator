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
              value: 120,
              init: darkElf.darkvision.init,
            },
          }
          darkElf.superiorDarkvision.applyIt.call(elfMockedInstance)
          expect(elfMockedInstance.darkvision.value).toEqual(120)
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
