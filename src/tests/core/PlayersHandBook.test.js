import { phb } from '../../core/PlayersHandBook.js'
import { DwarfMixin } from '../../core/races/dwarf/DwarfMixin.js'
import { HillDwarfMixin } from '../../core/races/dwarf/HillDwarfMixin.js'
import { MountainDwarfMixin } from '../../core/races/dwarf/MountainDwarfMixin.js'
import { Race } from '../../core/races/Race.js'

const Dwarf = DwarfMixin(Race)
const HillDwarf = HillDwarfMixin(Dwarf)
const MountainDwarf = MountainDwarfMixin(Dwarf)

describe('PlayersHandBook', () => {
  test('should have getRacialTraits property', () => {
    expect(phb).toHaveProperty('getRacialTraits', expect.any(Function))
  })

  describe('getRacialTraits', () => {
    testDuckTypingInstanceOf({
      text: 'should return HillDwarf instance with valid input',
      constructorFn: HillDwarf,
      testFn: () => phb.getRacialTraits('dwarf', { subrace: 'hill dwarf' }),
    })

    testDuckTypingInstanceOf({
      text: 'should return MountainDwarf instance with valid input',
      constructorFn: MountainDwarf,
      testFn: () => phb.getRacialTraits('dwarf', { subrace: 'mountain dwarf' }),
    })

    test('should call raceFactory method', () => {
      const mockedPhb = {
        raceFactory: jest.fn(),
      }

      phb.getRacialTraits.call(mockedPhb, 'dwarf', { subrace: 'hill dwarf' })

      expect(mockedPhb.raceFactory).toBeCalled()
    })
  })

  describe('raceFactory', () => {
    test('should exist', () => {
      expect(phb).toHaveProperty('raceFactory', expect.any(Function))
    })

    testDuckTypingInstanceOf({
      text: 'depending on the input parameters, generate the desired race instance',
      constructorFn: HillDwarf,
      testFn: () => phb.raceFactory('dwarf', { subrace: 'hill dwarf' }),
    })
  })
})

function testDuckTypingInstanceOf({ text, constructorFn, testFn }) {
  test(text, () => {
    const recieved = Object.keys(testFn())
    const expected = Object.keys(new constructorFn())

    expect(recieved).toEqual(expect.arrayContaining(expected))
  })
}
