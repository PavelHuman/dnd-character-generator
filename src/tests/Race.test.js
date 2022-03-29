import { Race } from '../core/races/Race.js'
import { commonTraits } from './types.js'
import { shoMetEx } from './utils.js'
const race = new Race()

describe('race', () => {
  test('should be instance of Race', () => {
    expect(race).toBeInstanceOf(Race)
  })

  commonTraits.forEach(trait => {
    test(`should exist trait ${trait.name}`, () => {
      expect(race).toHaveProperty(trait.name, trait.type)
    })
  })

  describe('initAge', () => {
    shoMetEx.shouldMethodExist('initAge')

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
    shoMetEx.shouldMethodExist('increaseAbilityScore')

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
    shoMetEx.shouldMethodExist('initAlignment')

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
