namespace SistemaPrestamosObjetosApi.Domain
{
    public class Persona
    {
        public int Id { get; set; }
        public string Nombre { get; set;}
        public string Apellido { get; set;}
        public int Celular { get; set;}
        public string CorreoElectronico { get; set;}       
        public ICollection<Prestamo> Prestamos { get; }   = new HashSet<Prestamo>();

    }
}