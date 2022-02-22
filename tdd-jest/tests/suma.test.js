const Calculadora = require('../models/calculadora');

describe('Sumar 2 números en la Calculadora', () => {
  var numero1, numero2;

  beforeEach(() => {
    numero1 = 1;
    numero2 = 2;
  });

  test(`Sumar ${numero1} y ${numero2} es igual a 3`, () => {
    // Arrange
    var calculadora = new Calculadora(numero1, numero2);

    // Act
    var resultado = calculadora.sumar();

    // Assert
    expect(resultado === 3).toBeTruthy();
  });
})