const Calculadora = require('../models/calculadora');

describe('Multiplicar 2 números en la Calculadora', () => {
  var numero1, numero2;

  beforeEach(() => {
    numero1 = 5;
    numero2 = 8;
  });

  // TDD: Prueba que falle
  test(`Multiplicar ${numero1} y ${numero2} no es igual a 50`, () => {
    // Arrange
    var calculadora = new Calculadora(numero1, numero2);

    // Act
    var resultado = calculadora.multiplicar();

    // Assert
    expect(resultado === 50).toBeFalsy();
  });

  // TDD: Camino óptimo de la prueba
  test(`Multiplicar ${numero1} y ${numero2} es igual a 40`, () => {
    // Arrange
    var calculadora = new Calculadora(numero1, numero2);

    // Act
    var resultado = calculadora.multiplicar();

    // Assert
    expect(resultado === 40).toBeTruthy();
  });

  // TDD: Tratar de romper la prueba
  test(`Multiplicar ${numero2} y ${numero1} (número al revés) es igual a 40`, () => {
    // Arrange
    var calculadora = new Calculadora(numero2, numero1);

    // Act
    var resultado = calculadora.multiplicar();

    // Assert
    expect(resultado).toEqual(40);
  });
})
