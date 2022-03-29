import { HillDwarf } from '../core/races/HillDwarf.js'
import { Dwarf } from '../core/races/Dwarf.js'
import { Race } from '../core/races/Race.js'

const hillDwarf = new HillDwarf()

// console.log(hillDwarf)

describe('hillDwarf', () => {
  test('should be instance of HillDwarf', () => {
    expect(hillDwarf).toBeInstanceOf(HillDwarf)
  })
  test('should be instance of Dwarf', () => {
    expect(hillDwarf).toBeInstanceOf(Dwarf)
  })
  test('should be instance of Race', () => {
    expect(hillDwarf).toBeInstanceOf(Race)
  })
})





describe('hillDwarf', () => {

})


describe('hillDwarf', () => {
  test('should be metmethod of abilityScoreIncrease', () => {

  })
})

