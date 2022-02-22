class Calculadora {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  sumar() {
    return this.x + this.y;
  }

  restar() {
    return this.x - this.y;
  }

  multiplicar() {
    return this.x * this.y;
  }

  dividir() {
    return this.x / this.y;
  }
}

module.exports = Calculadora;
