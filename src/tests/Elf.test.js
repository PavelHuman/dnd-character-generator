import { Elf } from '../core/races/Elf.js'
import { Race } from '../core/races/Race.js'
import { getInitTraiteType, testRaceInstance } from './utils.js'
import { pureTrait } from './types.js'

const elf = new Elf()

const traits = [

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
            init: elf.darkvision.init,
            state: true,
            description: 'Darkvision. Accustomed to twilit forests and the night sky, you have superior vision in dark and dim conditions. You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. You cant discern color in darkness, only shades of gray.',
            title: 'Darkvision',
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
    name: 'keenSenses',
    type: pureTrait,
  },
  {
    name: 'feyAncestry',
    type: pureTrait,
  },
  {
    name: 'trance',
    type: pureTrait,
  },
]


testRaceInstance({
  instance: {
    name: 'elf',
    value: elf,
  },
  constructors: [Elf, Race],
  traits,
})
