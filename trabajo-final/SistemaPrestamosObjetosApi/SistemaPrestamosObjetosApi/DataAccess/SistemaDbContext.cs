using Microsoft.EntityFrameworkCore;
using SistemaPrestamosObjetosApi.Domain;
using System.Net.Mail;

namespace SistemaPrestamosObjetosApi.DataAccess
{
    public class SistemaDbContext : DbContext
    {
        public DbSet<Prestamo> Prestamos { get; set; }
        public DbSet<Persona> Personas { get; set; }
        public DbSet<Cosa> Cosas { get; set; }
        public DbSet<Categoria> Categorias { get; set; }

        public SistemaDbContext(DbContextOptions options): base(options) =>
            this.Database.EnsureCreated();

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Prestamo>()
                .HasOne<Persona>()
                .WithMany(p => p.Prestamos)
                .IsRequired();
           
            modelBuilder.Entity<Cosa>()
                .HasOne<Categoria>()
                .WithMany(p => p.Cosas)
                .IsRequired();

            modelBuilder.Entity<Prestamo>()
               .HasOne<Cosa>()
               .WithMany(p => p.Prestamos)
               .IsRequired();

            modelBuilder.Entity<Persona>()
                .Property(e => e.Nombre)
                .HasMaxLength(50);
            modelBuilder.Entity<Persona>()
                .Property(e => e.Apellido)
                .HasMaxLength(50);
            modelBuilder.Entity<Persona>()
                .Property(e => e.Celular)
                .HasMaxLength(20);
            modelBuilder.Entity<Persona>()
                .Property(e => e.CorreoElectronico)
                .HasMaxLength(30);


            modelBuilder.Entity<Persona>(e =>
            {
                e.HasData(
                new Persona()
                {
                    Id = 1,
                    Nombre = "Sofia",
                    Apellido = "Ramirez",
                    Celular = 34112345,
                    CorreoElectronico = "sofiaramirez@gmail.com"
                }/*,
                new Persona()
                {
                    Id = 2,
                    Nombre = "Natalia",
                    Apellido = "Perez",
                    Celular = 34198721,
                    CorreoElectronico = "nataliaperez@gmail.com"
                }*/

                );
            });
            
     
            modelBuilder.Entity<Categoria>(e =>
            {
                e.HasData(
                new Categoria()
                {
                    Id = 1,
                    Descripcion = "Hogar Cocina",
                    FechaCreacion = new DateOnly(2023, 1, 1)
                },
                new Categoria(){
                    Id = 2,
                    Descripcion = "Hogar Electro",
                    FechaCreacion = new DateOnly(2023, 1, 1)
                },
                new Categoria()
                {
                    Id = 3,
                    Descripcion = "Dinero",
                    FechaCreacion = new DateOnly(2023, 1, 1)
                },
                new Categoria()
                {
                    Id = 4,
                    Descripcion = "Ropa",
                    FechaCreacion = new DateOnly(2023, 1, 1)
                },
                new Categoria()
                {
                    Id = 5,
                    Descripcion = "Varios",
                    FechaCreacion = new DateOnly(2023, 1, 1)
                });
            });
        }

    }
}
