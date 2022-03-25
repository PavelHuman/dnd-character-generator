import { Race } from '../core/races/Race.js'

const race = new Race()

const traits = [
  {
    name: 'languages',
    type: expect.any(Array),
  },
  {
    name: 'size',
    type: expect.objectContaining({
      type: expect.any(String),
      value: expect.any(Number),
    }),
  },
  {
    name: 'speed',
    type: expect.any(Number),
  },
  {
    name: 'age',
    type: expect.any(Number),
  },
  {
    name: 'hitPointMaximumIncrease',
    type: expect.any(Number),
  },
  {
    name: 'alignment',
    type: expect.any(String),
  },
  {
    name: 'proficiency',
    type: expect.objectContaining({
      tools: expect.any(Array),
      weapon: expect.any(Array),
      armor: expect.any(Array),
    }),
  },
]

describe('race', () => {
  test('should be instance of Race', () => {
    expect(race).toBeInstanceOf(Race)
  })

  traits.forEach(trait => {
    test(`should exist trait ${trait.name}`, () => {
      expect(race).toHaveProperty(trait.name, trait.type)
    })
  })

  describe('initAge', () => {
    shouldMethodExist('initAge')

    const mockedRace = {
      age: 0,
    }

    test('should apply received age if age >= 50', () => {
      const age = 50
      race.initAge.call(mockedRace, age)

      expect(mockedRace.age).toBe(age)
    })

    test('should apply random number <= 400 if received age < 50 ', () => {
      const age = 49
      race.initAge.call(mockedRace, age)

      expect(mockedRace.age).toEqual(expect.any(Number))
      expect(mockedRace.age <= 400).toBe(true)
    })

  })

  describe('increaseAbilityScore', () => {
    shouldMethodExist('increaseAbilityScore')

    test('should increase ability', () => {
      const mockedRace = {
        abilityScoreIncrease: {},
      }

      race.increaseAbilityScore.call(mockedRace, { constitution: 2 })

      expect(mockedRace.abilityScoreIncrease).toEqual({ constitution: 2 })
    })

    test('should sum if ability already exist', () => {
      const mockedRace = {
        abilityScoreIncrease: { constitution: 2 },
      }

      race.increaseAbilityScore.call(mockedRace, { constitution: 2 })

      expect(mockedRace.abilityScoreIncrease).toEqual({ constitution: 4 })
    })
  })

  describe('initAlignment', () => {
    shouldMethodExist('initAlignment')

    const alignments = ['neutralGood', 'chaoticGood', 'lawfulNeutral', 'neutral', 'chaoticNeutral', 'lawfulEvil', 'neutralEvil', 'chaoticEvil']

    test('should assign received alignment', () => {
      const mockedRace = {
        alignment: '',
      }
      race.initAlignment.call(mockedRace, alignments[alignments.length - 1])

      expect(mockedRace.alignment).toEqual(alignments[alignments.length - 1])
    })

    test('should assign random alignment if not received', () => {
      const mockedRace = {
        alignment: '',
      }
      race.initAlignment.call(mockedRace)

      expect(alignments.includes(mockedRace.alignment)).toEqual(true)
    })

  })


})


function shouldMethodExist(prop) {
  test('should exist', () => {
    expect(race).toHaveProperty(prop, expect.any(Function))
  })
}
