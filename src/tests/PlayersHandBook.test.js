import { phb } from '../core/PlayersHandBook.js'
import { HillDwarfMixin } from '../core/races/dwarf/HillDwarfMixin.js'
import { MountainDwarfMixin } from '../core/races/dwarf/MountainDwarfMixin.js'
import { Race } from '../core/races/Race.js'
import { DwarfMixin } from '../core/races/dwarf/DwarfMixin.js'

const Dwarf = DwarfMixin(Race)
const HillDwarf = HillDwarfMixin(Dwarf)
const MountainDwarf = MountainDwarfMixin(Dwarf)

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
})
