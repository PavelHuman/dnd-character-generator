import { phb } from '../../core/PlayersHandBook.js'

describe('PlayersHandBook', () => {
  test('should have getRacialTraits property', () => {
    expect(phb).toHaveProperty('getRacialTraits', expect.any(Function))
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
})
