namespace ConsoleApp1
{
    public class Calculadora
    {
        public double A { get; set; }
        public double B { get; set; }

        public Calculadora(double a, double b)
        {
            this.A = a;
            this.B = b;
        }

        public double Suma()
        {
            return A + B;
        }

        public double Resta()
        {
            return A - B;
        }

        public double Multiplicacion()
        {
            return A * B;
        }

        public double Division()
        {
            return A / B;
        }
    }
}
