const Calculadora = require('../models/calculadora');

describe('Dividir 2 números en la Calculadora', () => {
  var numero1, numero2;

  beforeEach(() => {
    numero1 = 10;
    numero2 = 5;
  });

  test(`Dividir ${numero1} y ${numero2} es igual a 2`, () => {
    // Arrange
    var calculadora = new Calculadora(numero1, numero2);

    // Act
    var resultado = calculadora.dividir();

    // Assert
    expect(resultado === 2).toBeTruthy();
  });

  test(`Dividir ${numero1} y ${numero2} No es igual a 50`, () => {
    // Arrange
    var calculadora = new Calculadora(numero1, numero2);

    // Act
    var resultado = calculadora.dividir();

    // Assert
    expect(resultado === 50).toBeFalsy();
  });

  test(`Dividir ${numero2} y ${numero1} (número al revés) es igual a 0.5`, () => {
    // Arrange
    var calculadora = new Calculadora(numero2, numero1);

    // Act
    var resultado = calculadora.dividir();

    // Assert
    expect(resultado).toEqual(0.5);
  });
})
