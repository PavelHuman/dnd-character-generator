import viewUtils from '../../view/viewUtils.js'

describe('upperFirst', () => {
  test('should return sentence with upper first letter in the each word', () => {
    const input = 'one two three'
    const output = 'One Two Three'

    expect(viewUtils.upperFirst(input)).toEqual(output)
  })
})


