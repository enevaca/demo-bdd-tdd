@Multiplicar
Feature: Multiplicar 2 Números
  Como un usuario de la calculadora
  Quiero multiplicar 2 números

  Scenario: Multiplicar 2 números pequeños
    Given la calculadora con los números 5 y 8
    When quiero multiplicar ambos números
    Then el resultado debe ser 40

  Scenario: Multiplicar 2 números grandes
    Given la calculadora con los números 123 y 777
    When quiero multiplicar ambos números
    Then el resultado debe ser 95571

  Scenario: Multiplicar 2 números considerando que el orden no altera el producto
    Given la calculadora con los números 8 y 5
    When quiero multiplicar ambos números
    Then el resultado debe ser 40
