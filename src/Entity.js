import { diceThrower } from './DiceThrower.js'
// Вы генерируете шесть значений характеристик случайно.

// Бросьте четыре 6-гранных кости и запишите
// сумму трёх наибольших результатов на листке для заметок.

// Проделайте это ещё пять раз, чтобы у вас получилось 6 чисел.

class Entity {
  constructor() {
    this.initAbilityScores()
    this.initAbilities()
  }

  initAbilities() {
    this.strength = null
    this.dexterity = null
    this.constituion = null
    this.intelligence = null
    this.wisdom = null
    this.charisma = null
  }



  initAbilityScores() {
    this.abilityScores = []

    for (let i = 0; i < 6; i++) {
      const trow = diceThrower.throwDices('4d6')
      const sorted = trow.slice().sort((a, b) => a - b)
      const firstMaxThree = sorted.reverse().slice(0, 3)
      const sum = firstMaxThree.reduce((acc, current) => acc + current, 0)

      this.abilityScores.push(sum)
    }
  }
}

export default Entity
