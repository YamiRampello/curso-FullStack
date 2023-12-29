//using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using SistemaPrestamosObjetosApi.DataAccess;
using SistemaPrestamosObjetosApi.Domain;

namespace SistemaPrestamosObjetosApi.Controllers
{
    [ApiController]
    [AllowAnonymous] //dejo esto para que se pueda ver el front
    
    [Route("api/[controller]")]
    public class PersonasController : ControllerBase
    {
      
        private readonly SistemaDbContext context;
        public PersonasController(SistemaDbContext context) => this.context = context;

        //GET api/personas
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Persona>>> GetAll()
        {
            return await this.context.Personas.ToListAsync();
        }


        //GET api/personas/{id}
        [HttpGet("{id}")]
        public async Task<ActionResult<Persona?>> GetById(int id)
        {          
            var persona = await this.context.FindAsync<Persona>(id);  

            if(persona == null)
                return this.NotFound();

            return persona;
        }


        // POST api/personas
        [HttpPost]
        public async Task<ActionResult<Persona>> Create(Persona persona) 
        {

            await this.context.AddAsync(persona);
            await this.context.SaveChangesAsync();

            return this.CreatedAtAction(nameof(GetById), new { id = persona.Id }, persona);
            
         }

        // PUT api/personas
        [HttpPut]
        public async Task<ActionResult> Update(Persona persona)
        { 
          this.context.Update(persona);
            await this.context.SaveChangesAsync();

            return this.NoContent();

        }

        //DELETE api/personas/{id}
        [HttpDelete("{id}")]
        public async Task<ActionResult> Delete(int id)
        {
            var persona = await this.context.FindAsync<Persona>(id);

            if (persona == null)
                return this.NotFound();

            this.context.Remove(persona);
            await this.context.SaveChangesAsync();

            return this.NoContent();
        }

    }
}
