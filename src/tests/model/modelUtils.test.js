import modleUtils from '../../model/modelUtils.js'

describe('normalizeInput', () => {
  test('should return serializable lowecased data', () => {
    const input = {
      date: new Date(),
      text: 'text',
    }

    const output = JSON.parse(JSON.stringify(input).toLowerCase())

    expect(modleUtils.normalizeInput(input)).toEqual(output)
  })
})
