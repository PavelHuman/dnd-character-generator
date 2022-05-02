import { mapObject } from './utils.js'

describe('mapObject', () => {
  test('should a function', () => {
    expect(mapObject).toEqual(expect.any(Function))
  })

  test('should return new object for each feild called callback function', () => {
    const input = [
      {
        a: 0,
        b: 0,
        c: 0,
      },
      (value) => value + 1,
    ]

    const expectedOutput = {
      a: 1,
      b: 1,
      c: 1,
    }

    expect(mapObject(...input)).toEqual(expectedOutput)
  })
})
