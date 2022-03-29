import { Race } from '../core/races/Race.js'
import { testInstance } from './utils.js'
const race = new Race()

const getInitTrateType = typeObject => expect.objectContaining({
  ...typeObject,
  init: expect.any(Function),
})

export const traits = [
  {
    name: 'languages',
    type: expect.any(Array),
  },
  {
    name: 'size',
    type: getInitTrateType({
      type: expect.any(String),
      value: expect.any(Number),
    }),
  },
  {
    name: 'speed',
    type: getInitTrateType({
      value: expect.any(Number),
    }),
  },
  {
    name: 'age',
    type: getInitTrateType({
      value: expect.any(Number),
    }),
    test() {
      describe('init', () => {
        const mockedRace = {
          age: {
            value: 0,
            init: race.age.init,
          },
        }

        test('should apply received age if age >= 50', () => {
          const age = 50
          mockedRace.age.init(age)

          expect(mockedRace.age.value).toBe(age)
        })

        test('should apply random number <= 400 if received age < 50 ', () => {
          const age = 49
          mockedRace.age.init(age)

          expect(mockedRace.age.value).toEqual(expect.any(Number))
          expect(mockedRace.age.value <= 400).toBe(true)
        })
      })
    },
  },
  {
    name: 'hitPointMaximumIncrease',
    type: expect.any(Number),
  },
  {
    name: 'alignment',
    type: getInitTrateType({ value: expect.any(String) }),
    test() {
      describe('init', () => {
        const alignments = ['neutralGood', 'chaoticGood', 'lawfulNeutral', 'neutral', 'chaoticNeutral', 'lawfulEvil', 'neutralEvil', 'chaoticEvil']

        test('should assign received alignment', () => {
          const mockedRace = {
            alignment: {
              valuie: '',
              init: race.alignment.init,
            },
          }
          mockedRace.alignment.init(alignments[alignments.length - 1])

          expect(mockedRace.alignment.value).toEqual(alignments[alignments.length - 1])
        })

        test('should assign random alignment if not received', () => {
          const mockedRace = {
            alignment: {
              valuie: '',
              init: race.alignment.init,
            },
          }

          mockedRace.alignment.init()

          expect(alignments.includes(mockedRace.alignment.value)).toEqual(true)
        })

      })
    },
  },
  {
    name: 'proficiency',
    type: expect.objectContaining({
      tools: expect.any(Array),
      weapon: expect.any(Array),
      armor: expect.any(Array),
    }),
  },
  {
    name: 'abilityScoreIncrease',
    type: getInitTrateType({ value: expect.any(Object) }),
    test() {
      describe('init', () => {

        test('should increase ability', () => {
          const mockedRace = {
            abilityScoreIncrease: {
              value: {},
              init: race.abilityScoreIncrease.init,
            },
          }

          mockedRace.abilityScoreIncrease.init({ constitution: 2 })

          expect(mockedRace.abilityScoreIncrease.value).toEqual({ constitution: 2 })
        })

        test('should sum if ability already exist', () => {
          const mockedRace = {
            abilityScoreIncrease: {
              value: { constitution: 2 },
              init: race.abilityScoreIncrease.init,
            },
          }

          mockedRace.abilityScoreIncrease.init({ constitution: 2 })

          expect(mockedRace.abilityScoreIncrease.value).toEqual({ constitution: 4 })
        })
      })
    },
  },
]


testInstance({
  instance: {
    name: 'race',
    value: race,
  },
  constructorFn: {
    name: 'Race',
    value: Race,
  },
  traits,
})
