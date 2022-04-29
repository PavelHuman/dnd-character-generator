import { phb } from '../core/PlayersHandBook.js'
import { HillDwarf } from '../core/races/HillDwarf.js'
import { MountainDwarf } from '../core/races/MountainDwarf.js'
import { HighElf } from '../core/races/HighElf.js'
import { WoodElf } from '../core/races/WoodElf.js'
import { DarkElf } from '../core/races/DarkElf.js'
import { Lightfoot } from '../core/races/Lightfoot.js'
import { Stout } from '../core/races/Stout.js'

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

  const array = [
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

  array.forEach((item) => {
    test(`should return ${item.subraceClass.name} instance with valid input`, () => {
      expect(phb.getRacialTraits(item.race, { subrace: item.subrace })).toBeInstanceOf(item.subraceClass)
    })
  })
  // array.forEach((item) => {
  //   test(`should return ${item.subraceClass.name} instance with valid input`, () => {
  //     expect(phb.getRacialTraits('elf', { subrace: item.subrace })).toBeInstanceOf(item.subraceClass)
  //   })
  // })
  // array.forEach((item) => {
  //   test(`should return ${item.subraceClass.name} instance with valid input`, () => {
  //     expect(phb.getRacialTraits('halfling', { subrace: item.subrace })).toBeInstanceOf(item.subraceClass)
  //   })
  // })

  /**
   * git stash сохранить изменения
   * свичнуться на новую ветку
   * git stash apply применить изменения
   */


  test('should call raceFactory method', () => {
    const mockedPhb = {
      raceFactory: jest.fn(),
    }

    phb.getRacialTraits.call(mockedPhb, 'dwarf', { subrace: 'hill dwarf' })

    expect(mockedPhb.raceFactory).toBeCalled()
  })
})

