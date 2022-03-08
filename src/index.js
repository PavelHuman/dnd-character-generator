import DiceThrower from './DiceThrower.js'
import { Dog, DogEs5 } from './Dog.js'

const dog = new Dog()
const dogEs5 = new DogEs5()

console.dir(Dog)
console.log('instance Dog', dog)

console.log('')
console.log('*******')
console.log('')
console.dir(DogEs5)
console.log('instance DogEs5', dogEs5)

console.log(dog instanceof DogEs5)
console.log(dogEs5 instanceof DogEs5)

// console.log("index.js")

// console.dir(DiceThrower)

const diceThrower = new DiceThrower()

// console.log('instance DiceThrower', diceThrower)

// Бросьте четыре 6-гранных кости
const thrown4d6 = diceThrower.throwDices('4d6')

// console.log({
//   thrown4d6,
// })

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

// console.log({
//   sorted,
// })

// 2. получить первые три наибольших элемента
const firstMaxThree = sorted.reverse().slice(0, 3)

// console.log({
//   firstMaxThree,
// })

// 3. получить их сумму
const sum = firstMaxThree.reduce((acc, current) => acc + current, 0)

// console.log({ sum })
