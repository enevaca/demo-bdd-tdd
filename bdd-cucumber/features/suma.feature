@Sumar
Feature: Sumar 2 Números
  Como un usuario de la calculadora
  Quiero sumar 2 números

  Scenario: Sumar 2 números pequeños
    Given la calculadora con los números 5 y 8
    When quiero sumar ambos números
    Then el resultado debe ser 13

  Scenario: Sumar 2 números grandes
    Given la calculadora con los números 123 y 777
    When quiero sumar ambos números
    Then el resultado debe ser 900

  Scenario: Sumar 2 números con resultado incorrecto
    Given la calculadora con los números 5 y 8
    When quiero sumar ambos números
    Then el resultado debe ser distinto de 14
