@Restar
Feature: Restar 2 Números
  Como un usuario de la calculadora
  Quiero restar 2 números

  Scenario: Restar 2 números pequeños
    Given la calculadora con los números 8 y 5
    When quiero restar ambos números
    Then el resultado debe ser 3

  Scenario: Restar 2 números grandes
    Given la calculadora con los números 777 y 123
    When quiero restar ambos números
    Then el resultado debe ser 654

  Scenario: Restar 2 números y obtener resultado negativo
    Given la calculadora con los números 5 y 8
    When quiero restar ambos números
    Then el resultado debe ser -3
