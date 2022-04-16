function factorial(n) {
  if (n === 0) return 1

  let result = 1
  for (let i = 1; i <= n; i++) {
    result = result * i
  }


  return result
}

describe('factorial', () => {
  test('0! should be 1', () => {
    expect(factorial(0)).toBe(1)
  })
  test('1! should be 1 * 1 => 1', () => {
    expect(factorial(1)).toBe(1)
  })
  test('2! should be 1 * 1 * 2 => 2', () => {
    expect(factorial(2)).toBe(2)
  })
  test('3! should be 1 * 1 * 2 * 3 => 6', () => {
    expect(factorial(3)).toBe(6)
  })
  test('10! should be ', () => {
    expect(factorial(10)).toBe(3628800)
  })

})

function factorialList(n) {
  const result = [1]

  if (n === 0) return result

  for (let i = 1; i <= n; i++) {
    result.push(result[i - 1] * i)
  }


  return result
}

describe('factorialList', () => {
  test('should take a number and return list of factorial numbers items', () => {
    expect(factorialList(3)).toEqual([1, 1, 2, 6])
  })
  test('should take a number and return list of expected factorial numbers', () => {
    const inputNumber = 10

    expect(factorialList(inputNumber)).toEqual(Array.from({ length: inputNumber + 1 }, (_, i) => factorial(i)))
  })
})
