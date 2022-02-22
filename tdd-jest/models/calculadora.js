class Calculadora {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  sumar() {
    return this.x + this.y;
  }
}

module.exports = Calculadora;