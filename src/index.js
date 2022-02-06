import DiceThrower from './DiceThrower.js'
import Entity from './Entity.js'
console.log("index.js")

const diceThrower = new DiceThrower()
const entity = new Entity()
// Бросьте четыре 6-гранных кости
const thrown4d6 = diceThrower.throwDices('4d6')
entity.sayHello()
console.log({
  thrown4d6,
})

/**
 * запишите сумму трёх наибольших результатов.
 *
 * 1. отсортировать массив
 * 2. получить первые три наибольших элемента
 * 3. получить их сумму
 */


// 1. отсортировать массив
// https://learn.javascript.ru/array-methods#sort-fn
const sorted = thrown4d6.slice().sort((a, b) => a - b)

console.log({
  sorted,
})

// 2. получить первые три наибольших элемента
const firstMaxThree = sorted.reverse().slice(0, 3)

console.log({
  firstMaxThree,
})

// 3. получить их сумму
const sum = firstMaxThree.reduce((acc, current) => acc + current, 0)

console.log({ sum })
