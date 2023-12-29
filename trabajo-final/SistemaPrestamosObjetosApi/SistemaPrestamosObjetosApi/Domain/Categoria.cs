namespace SistemaPrestamosObjetosApi.Domain
{
    public class Categoria
    {
        public int Id { get; set; } 
        public string Descripcion { get; set; }
        public DateOnly FechaCreacion { get; set;}
        
        public ICollection<Cosa> Cosas { get; } = new HashSet<Cosa>();
    }
}
