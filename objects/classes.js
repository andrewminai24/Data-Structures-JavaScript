function Dog(legs, name) {
  this.legs = legs;
  this.name = name;
}

const Labrador = new Dog(3, 'Lassie')
console.log(Labrador)

class Cat {
  constructor(legs, name) {
    this.legs = legs;
    this.name = name;
  }
}

const Whiskers = new Cat(4, 'Whisksers')
console.log(Whiskers)
