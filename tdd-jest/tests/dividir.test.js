const Calculadora = require('../models/calculadora');

describe('Dividir 2 números en la Calculadora', () => {
  var numero1, numero2;

  beforeEach(() => {
    numero1 = 10;
    numero2 = 5;
  });

  // TDD: Prueba que falle
  test(`Dividir ${numero1} y ${numero2} no es igual a 50`, () => {
    // Arrange
    var calculadora = new Calculadora(numero1, numero2);

    // Act
    var resultado = calculadora.dividir();

    // Assert
    expect(resultado === 50).toBeFalsy();
  });

  // TDD: Camino óptimo de la prueba
  test(`Dividir ${numero1} y ${numero2} es igual a 2`, () => {
    // Arrange
    var calculadora = new Calculadora(numero1, numero2);

    // Act
    var resultado = calculadora.dividir();

    // Assert
    expect(resultado === 2).toBeTruthy();
  });

  // TDD: Tratar de romper la prueba
  test(`Dividir ${numero2} y ${numero1} (número al revés) es igual a 0.5`, () => {
    // Arrange
    var calculadora = new Calculadora(numero2, numero1);

    // Act
    var resultado = calculadora.dividir();

    // Assert
    expect(resultado).toEqual(0.5);
  });
})
