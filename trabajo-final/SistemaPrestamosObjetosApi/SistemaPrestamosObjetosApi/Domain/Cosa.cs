namespace SistemaPrestamosObjetosApi.Domain
{
    public class Cosa
    {
        public int Id { get; set; } 
        public string Descripcion { get; set; } 
        public DateOnly FechaCreacion { get; set; } 
        public ICollection<Prestamo> Prestamos { get; } = new HashSet<Prestamo>();

    }
}
