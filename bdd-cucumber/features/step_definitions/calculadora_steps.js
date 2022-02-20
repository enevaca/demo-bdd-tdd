const assert = require('assert');
const { Given, When, Then } = require('@cucumber/cucumber');
const Calculadora = require('../../models/calculadora');

var calculadora;

Given('la calculadora con los números {float} y {float}', (numero1, numero2) => {
  calculadora = new Calculadora(numero1, numero2);
});

When('quiero sumar ambos números', () => {
  calculadora.sumar();
});

When('quiero restar ambos números', () => {
  calculadora.restar();
});

When('quiero multiplicar ambos números', () => {
  calculadora.multiplicar();
});

When('quiero dividir ambos números', () => {
  calculadora.dividir();
});

Then('el resultado debe ser {float}', (expected) => {
  assert.equal(calculadora.getResultado(), expected);
});

Then('el resultado debe ser distinto de {float}', (expected) => {
  assert.notEqual(calculadora.getResultado(), expected);
});

Then('la división por Cero no está permitida', () => {
  assert.equal(calculadora.getResultado(), Infinity);
});
