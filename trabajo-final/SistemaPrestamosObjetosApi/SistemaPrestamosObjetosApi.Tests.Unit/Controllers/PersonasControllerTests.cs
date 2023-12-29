using SistemaPrestamosObjetosApi.Controllers;
using SistemaPrestamosObjetosApi.DataAccess;
using SistemaPrestamosObjetosApi.Domain;
using FluentAssertions.Execution;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Data.Sqlite;
using Microsoft.EntityFrameworkCore;
using FluentAssertions;

namespace SistemaPrestamosObjetosApi.Tests.Unit.Controllers
{
    public class PersonasControllerTests : IDisposable
    {
        //[Fact]
        private readonly SqliteConnection connection = new("Filename=:memory:");
        private readonly SistemaDbContext context;
        private readonly PersonasController sut;

        public PersonasControllerTests()
        {
        this.connection.Open();

            var options = new DbContextOptionsBuilder()
                .UseSqlite(this.connection)
                .Options;
            
            this.context = new SistemaDbContext(options);

            this.sut = new PersonasController(this.context);
        }

        public void Dispose() => this.connection.Dispose();

        public class TheMethod_GetAll : PersonasControllerTests
        {
            [Fact]
            public async Task Should_return_all_init_persons()
            {
                //arrange
                await this.IniciarlizarPersonas();

                //act
                ActionResult<IEnumerable<Persona>> actual = await this.sut.GetAll();

                //assert
                actual.Value.Should().HaveCount(2);

            }
        }

        //
        public class TheMethod_GetById : PersonasControllerTests
        {
            [Fact]
            public async Task Should_return_person_with_Id_equals_two()
            {
                //arrange
                await this.IniciarlizarPersonas();

                //act
                ActionResult<Persona?> actual = await this.sut.GetById(2);

                //assert
                actual.Value.Should().NotBeNull();

                Persona personaDos = actual.Value!;

                using (new AssertionScope())
                {
                personaDos.Id.Should().Be(2);
                personaDos.Nombre.Should().Be("Natalia");
                personaDos.Apellido.Should().Be("Perez");
                personaDos.Celular.Should().Be(34198721);
                personaDos.CorreoElectronico.Should().Be("natalia@gmail.com");
                    
                }
            }

            [Fact]
            public async Task Should_return_NotFound_when_person_does_not_exists()
            {
                // arrange
                await this.IniciarlizarPersonas();

                // act
                ActionResult<Persona?> actual = await this.sut.GetById(40);

                // assert
                actual.Result.Should().BeOfType<NotFoundResult>();
                actual.Value.Should().BeNull();
            }

        }
        //
        public class TheMethod_Delete : PersonasControllerTests
        {
            [Fact]
            public async Task Should_remove_person_with_Id_equals_two()
            {
                // arrange
                await this.IniciarlizarPersonas();

                // act
                ActionResult actual = await this.sut.Delete(2);

                // assert
                actual.Should().BeOfType<NoContentResult>();

                var personaUno = await this.context.FindAsync<Persona>(2);
                personaUno.Should().BeNull();
            }
        }

        private async Task IniciarlizarPersonas()
        {
            await this.context.AddRangeAsync(
                new Persona()
                {
                    Nombre = "Natalia",
                    Apellido = "Perez",
                    Celular = 34198721,
                    CorreoElectronico = "natalia@gmail.com"
                }
                );

            await this.context.SaveChangesAsync();
        }
    }
}