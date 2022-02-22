using ConsoleApp1;
using Xunit;

namespace Tests
{
    public class UnitTest
    {
        [Fact]
        public void TestSuma()
        {
            // Arrange
            Calculadora calculadora = new Calculadora(4.5, 5.6);

            // Act
            double resultado = calculadora.Suma();

            // Assert
            Assert.Equal(10.1, resultado);
        }

        [Fact]
        public void TestResta()
        {
            // Arrange
            Calculadora calculadora = new Calculadora(100, 40);

            // Act
            double resultado = calculadora.Resta();

            // Assert
            Assert.Equal(60, resultado);
        }


        [Fact]
        public void TestMultiplicacion()
        {
            // Arrange
            Calculadora calculadora = new Calculadora(5, 30);

            // Act
            double resultado = calculadora.Multiplicacion();

            // Assert
            Assert.Equal(150, resultado);
        }

        [Fact]
        public void TestDivision()
        {
            // Arrange
            Calculadora calculadora = new Calculadora(300, 6);

            // Act
            double resultado = calculadora.Division();

            // Assert
            Assert.Equal(50, resultado);
        }
    }
}
