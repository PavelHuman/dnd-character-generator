import { Race } from '../../../core/races/Race.js'
import { testRaceInstance, getInitTraiteType } from '../../testUtils.js'

const race = new Race()



export const traits = [
  {
    name: 'languages',
    type: expect.any(Array),
  },
  {
    name: 'size',
    type: getInitTraiteType({
      type: expect.any(String),
      value: expect.any(Number),
    }),
  },
  {
    name: 'speed',
    type: getInitTraiteType({
      value: expect.any(Number),
    }),
    test() {
      describe('init', () => {
        const mockedRace = {
          speed: {
            value: 0,
            init: race.speed.init,
          },
        }

        test('should apply received speed value', () => {
          const speed = 25
          mockedRace.speed.init(speed)

          expect(mockedRace.speed.value).toBe(speed)
        })
      })
    },
  },
  {
    name: 'age',
    type: getInitTraiteType({
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
    type: getInitTraiteType({ value: expect.any(String) }),
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
    type: getInitTraiteType({ value: expect.any(Object) }),
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

  {
    name: 'magic',
    type: expect.objectContaining({
      firstLevel: expect.any(Object),
      secondLevel: expect.any(Object),
      thirdLevel: expect.any(Object),
      fourthLevel: expect.any(Object),
      fifthLevel: expect.any(Object),
      cantrips: expect.any(Object),
    }),
  },
]


testRaceInstance({
  instance: {
    name: 'race',
    value: race,
  },
  constructors: [Race],
  traits,
})
