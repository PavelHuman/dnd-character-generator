import { phb } from '../core/PlayersHandBook.js'
import { HillDwarf } from '../core/races/HillDwarf.js'

describe('PlayersHandBook', () => {
  test('should have getRacialTraits property', () => {
    expect(phb).toHaveProperty('getRacialTraits', expect.any(Function))
  })
  test('should have raceFactory property', () => {
    expect(phb).toHaveProperty('raceFactory', expect.any(Function))
  })
  describe('raceFactory', () => {
    test('depending on the input parameters, generate the desired race instance', () => {
      expect(phb.raceFactory('dwarf', 'hill dwarf')).toBeInstanceOf(HillDwarf)
    })
  })
})
describe('getRacialTraits', () => {
  test('should call raceFactory method', () => {
    const mockedPhb = {
      raceFactory: jest.fn(),
    }
    phb.getRacialTraits.call(mockedPhb)
    expect(mockedPhb.raceFactory).toBeCalled()
  })
})

