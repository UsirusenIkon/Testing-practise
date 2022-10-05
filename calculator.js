class Calculator {
  constructor(a, b) {
    this.a = a
    this.b = b
  }
  divide() {
  return  this.a / this.b
  }

  multiply() {
    return this.a * this.b
  }

  add() {
    return this.a + this.b
  }

  subtract() {
    return this.a - this.b
  }
}

module.exports = Calculator;