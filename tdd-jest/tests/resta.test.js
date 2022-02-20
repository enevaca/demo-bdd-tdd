const Calculadora = require('../models/calculadora');

describe('Restar 2 números en la Calculadora', () => {
  var numero1, numero2;

  beforeEach(() => {
    numero1 = 8;
    numero2 = 5;
  });

  // TDD: Prueba que falle
  test(`Restar ${numero1} y ${numero2} no es igual a 50`, () => {
    // Arrange
    var calculadora = new Calculadora(numero1, numero2);

    // Act
    var resultado = calculadora.restar();

    // Assert
    expect(resultado === 50).toBeFalsy();
  });

  // TDD: Camino óptimo de la prueba
  test(`Restar ${numero1} y ${numero2} es igual a 3`, () => {
    // Arrange
    var calculadora = new Calculadora(numero1, numero2);

    // Act
    var resultado = calculadora.restar();

    // Assert
    expect(resultado === 3).toBeTruthy();
  });

  // TDD: Tratar de romper la prueba
  test(`Restar ${numero2} y ${numero1} (número al revés) es igual a -3`, () => {
    // Arrange
    var calculadora = new Calculadora(numero2, numero1);

    // Act
    var resultado = calculadora.restar();

    // Assert
    expect(resultado).toEqual(-3);
  });
})
