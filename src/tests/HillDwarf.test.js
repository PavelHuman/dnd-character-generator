import { HillDwarf } from '../core/races/HillDwarf.js'
import { commonTraits } from './types.js'

const hillDwarf = new HillDwarf()

describe('hillDwarf', () => {
  test('should be instance of HillDwarf', () => {
    expect(hillDwarf).toBeInstanceOf(HillDwarf)
  })

  commonTraits.forEach(trait => {
    test(`should exist trait ${trait.name}`, () => {
      expect(hillDwarf).toHaveProperty(trait.name, trait.type)
    })
  })

  describe('increaseAbilityScore', () => {
    shouldMethodExist('increaseAbilityScore')

    test('should increase ability', () => {
      const mockedHill = {
        abilityScoreIncrease: {},
      }

      hillDwarf.increaseAbilityScore.call(mockedHill, { wisdom: 1 })

      expect(mockedHill.abilityScoreIncrease).toEqual({ wisdom: 1 })
    })
    test('should sum if ability already exist', () => {
      const mockedHill = {
        abilityScoreIncrease: { wisdom: 1 },
      }

      hillDwarf.increaseAbilityScore.call(mockedHill, { wisdom: 1 })

      expect(mockedHill.abilityScoreIncrease).toEqual({ wisdom: 2 })
    })
  })
})

function shouldMethodExist(prop) {
  test('should exist', () => {
    expect(hillDwarf).toHaveProperty(prop, expect.any(Function))
  })
}
