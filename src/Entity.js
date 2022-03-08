// Вы генерируете шесть значений характеристик случайно. 

// Бросьте четыре 6-гранных кости и запишите
// сумму трёх наибольших результатов на листке для заметок. 

// Проделайте это ещё пять раз, чтобы у вас получилось 6 чисел.

class Entity {
  constructor() {
    this.initAbilityScores()
  }

  initAbilityScores() {
    this.strength = null
    this.dexterity = null
    this.constituion = null
    this.intelligence = null
    this.wisdom = null
    this.charisma = null
  }

  sayHello() {
    console.log('hello');
  }
}

export default Entity
