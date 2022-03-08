export class Dog {
  #name = 'Dog'
  specialBark = function() {
    console.log(this.name)
  }
  
  // constructor(name) {
  //   this.name = 'Dog'
  //   this.specialBark = function () {
  //     console.log(this.name)
  //   }
  // }

  static author = 'Dmitry G. Anderson'

  
  

  bark() {
    console.log('woff')
  }

  sayHi() {
    console.log('Hi')
  }
}

// *******

export const DogEs5 = function DogEs5(name = 'Dog') {
  this.name = name
}

DogEs5.author = 'Dmitry G. Anderson'

DogEs5.prototype.bark = function bark() {
  console.log('woff')
}

DogEs5.prototype.sayHi = function sayHi() {
  console.log('Hi')
}
