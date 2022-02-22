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

  test(`Sumar ${numero1} y ${numero2} No es igual a 50`, () => {
    // Arrange
    var calculadora = new Calculadora(numero1, numero2);

    // Act
    var resultado = calculadora.sumar();

    // Assert
    expect(resultado === 50).toBeFalsy();
  });

  test(`Sumar ${numero2} y ${numero1} (número al revés) es igual a 3`, () => {
    // Arrange
    var calculadora = new Calculadora(numero2, numero1);

    // Act
    var resultado = calculadora.sumar();

    // Assert
    expect(resultado).toEqual(3);
  });
})