import { phb } from '../../core/PlayersHandBook.js'
import { Race } from '../../core/races/Race.js'
import { DwarfMixin } from '../../core/races/dwarf/DwarfMixin.js'
import { HillDwarfMixin } from '../../core/races/dwarf/HillDwarfMixin.js'
import { MountainDwarfMixin } from '../../core/races/dwarf/MountainDwarfMixin.js'
import { HighElf } from '../../core/races/elf/HighElf.js'
import { WoodElf } from '../../core/races/elf/WoodElf.js'
import { DarkElf } from '../../core/races/elf/DarkElf.js'
import { Lightfoot } from '../../core/races/halfling/Lightfoot.js'
import { Stout } from '../../core/races/halfling/Stout.js'

const Dwarf = DwarfMixin(Race)
const HillDwarf = HillDwarfMixin(Dwarf)

describe('PlayersHandBook', () => {
  test('should have getRacialTraits property', () => {
    expect(phb).toHaveProperty('getRacialTraits', expect.any(Function))
  })

  test('should have raceFactory property', () => {
    expect(phb).toHaveProperty('raceFactory', expect.any(Function))
  })

  describe('raceFactory', () => {
    test('depending on the input parameters, generate the desired race instance', () => {
      expect(Object.keys(phb.raceFactory('dwarf', 'hill dwarf'))).toEqual(Object.keys(new HillDwarf()))
    })
  })
})

describe('getRacialTraits', () => {

  const raceEntries = [
    {
      race: 'dwarf',
      subrace: 'hill dwarf',
      subraceClass: HillDwarf,
    },
    {
      race: 'dwarf',
      subrace: 'mountain dwarf',
      subraceClass: MountainDwarfMixin(Dwarf),
    },
    {
      race: 'elf',
      subrace: 'high elf',
      subraceClass: HighElf,
    },
    {
      race: 'elf',
      subrace: 'wood elf',
      subraceClass: WoodElf,
    },
    {
      race: 'elf',
      subrace: 'dark elf',
      subraceClass: DarkElf,
    },
    {
      race: 'halfling',
      subrace: 'lightfoot halfling',
      subraceClass: Lightfoot,
    },
    {
      race: 'halfling',
      subrace: 'stout halfling',
      subraceClass: Stout,
    },
  ]

  raceEntries.forEach((raceEntry) => {
    test(`should return ${raceEntry.subraceClass.name} instance with valid input`, () => {
      expect(Object.keys(phb.getRacialTraits(raceEntry.race, { subrace: raceEntry.subrace }))).toEqual(expect.arrayContaining(Object.keys(new raceEntry.subraceClass())))
    })
  })

  test('should call raceFactory method', () => {
    const mockedPhb = {
      raceFactory: jest.fn(),
    }

    phb.getRacialTraits.call(mockedPhb, 'dwarf', { subrace: 'hill dwarf' })

    expect(mockedPhb.raceFactory).toBeCalled()
  })
})

