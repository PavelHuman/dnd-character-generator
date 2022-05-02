import { phb } from '../../core/PlayersHandBook.js'
import { HillDwarf } from '../../core/races/dwarf/HillDwarf.js'
import { MountainDwarf } from '../../core/races/dwarf/MountainDwarf.js'
import { HighElf } from '../../core/races/elf/HighElf.js'
import { WoodElf } from '../../core/races/elf/WoodElf.js'
import { DarkElf } from '../../core/races/elf/DarkElf.js'
import { Lightfoot } from '../../core/races/halfling/Lightfoot.js'
import { Stout } from '../../core/races/halfling/Stout.js'

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

  const raceEntries = [
    {
      race: 'dwarf',
      subrace: 'hill dwarf',
      subraceClass: HillDwarf,
    },
    {
      race: 'dwarf',
      subrace: 'mountain dwarf',
      subraceClass: MountainDwarf,
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
      expect(phb.getRacialTraits(raceEntry.race, { subrace: raceEntry.subrace })).toBeInstanceOf(raceEntry.subraceClass)
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

