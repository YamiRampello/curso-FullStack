using System.Reflection.Metadata;

namespace SistemaPrestamosObjetosApi.Domain
{
    public class Prestamo
    {
        public int Id { get; set; }
        public DateOnly FechaPrestado { get; set; } 
        public DateOnly FechaRetorno { get; set;}
        public string Estado { get; set; }
    }
}