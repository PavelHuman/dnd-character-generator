import { phb } from '../core/PlayersHandBook.js'
import { HillDwarf } from '../core/races/HillDwarf.js'
import { MountainDwarf } from '../core/races/MountainDwarf.js'

describe('PlayersHandBook', () => {
  test('should have getRacialTraits property', () => {
    expect(phb).toHaveProperty('getRacialTraits', expect.any(Function))
  })

  describe('getRacialTraits', () => {
    test('should return HillDwarf instance with valid input', () => {
      expect(phb.getRacialTraits('dwarf', { subrace: 'hill dwarf' })).toBeInstanceOf(HillDwarf)
    })
    test('should return MountainDwarf instance with valid input', () => {
      expect(phb.getRacialTraits('dwarf', { subrace: 'mountain dwarf' })).toBeInstanceOf(MountainDwarf)
    })
  })
  describe('PlayersHandBook', () => {
    test('should have raceFactory property', () => {
      expect(phb).toHaveProperty('raceFactory', expect.any(Function))
    })
  })
})


