import { phb } from '../core/PlayersHandBook.js'
import { HillDwarf } from '../core/races/HillDwarf.js'
import { MountainDwarf } from '../core/races/MountainDwarf.js'
import { HighElf } from '../core/races/HighElf.js'
import { WoodElf } from '../core/races/WoodElf.js'
import { DarkElf } from '../core/races/DarkElf.js'

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
  });
  [
    { subrace: 'high elf', subraceClass: HighElf },
    { subrace: 'wood elf', subraceClass: WoodElf },
    { subrace: 'dark elf', subraceClass: DarkElf },
  ]
    .forEach((item) => {
      console.log(item)
      test(`should return ${item.subraceClass.name} instance with valid input`, () => {
        expect(phb.getRacialTraits('elf', { subrace: item.subrace })).toBeInstanceOf(item.subraceClass)
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

