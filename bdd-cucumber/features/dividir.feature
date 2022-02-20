@Dividir
Feature: Dividir 2 Números
  Como un usuario de la calculadora
  Quiero dividir 2 números

  Scenario: Dividir 2 números y obtener resulta sin parte decimal
    Given la calculadora con los números 10 y 5
    When quiero dividir ambos números
    Then el resultado debe ser 2

  Scenario: Dividir 2 números y obtener resultado con parte decimal
    Given la calculadora con los números 5 y 2
    When quiero dividir ambos números
    Then el resultado debe ser 2.5

  Scenario: Dividir 2 números considerando que el orden sí afecta el resultado
    Given la calculadora con los números 2 y 5
    When quiero dividir ambos números
    Then el resultado debe ser distinto de 2.5

  Scenario: Dividir 2 números considerando la división por Cero (Indefinición)
    Given la calculadora con los números 5 y 0
    When quiero dividir ambos números
    Then la división por Cero no está permitida
