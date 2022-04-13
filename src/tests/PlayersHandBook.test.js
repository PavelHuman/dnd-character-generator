import { phb } from '../core/PlayersHandBook.js'
import { HillDwarf } from '../core/races/HillDwarf.js'
import { MountainDwarf } from '../core/races/MountainDwarf.js'

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
  test('should return HillDwarf instance with valid input', () => {
    expect(phb.getRacialTraits('dwarf', { subrace: 'hill dwarf' })).toBeInstanceOf(HillDwarf)
  })
  test('should return MountainDwarf instance with valid input', () => {
    expect(phb.getRacialTraits('dwarf', { subrace: 'mountain dwarf' })).toBeInstanceOf(MountainDwarf)

  })
  test('should call raceFactory method', () => {
    const mockedPhb = {
      raceFactory: jest.fn(),
    }
    phb.getRacialTraits.call(mockedPhb, 'dwarf', { subrace: 'hill dwarf' })
    expect(mockedPhb.raceFactory).toBeCalled()
  })
})

