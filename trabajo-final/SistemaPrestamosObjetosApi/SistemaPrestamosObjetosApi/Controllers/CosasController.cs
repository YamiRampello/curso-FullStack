using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using SistemaPrestamosObjetosApi.DataAccess;
using SistemaPrestamosObjetosApi.Domain;

namespace SistemaPrestamosObjetosApi.Controllers
{
    [AllowAnonymous]
    [ApiController]
    [Route("api/[controller]")]
    public class CosasController: ControllerBase
    {
        
        private readonly SistemaDbContext context;
        public CosasController(SistemaDbContext context) => this.context = context;

        //GET api/cosas
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Cosa>>> GetAll()
        {
            return await this.context.Cosas.ToListAsync();
        }

        //GET api/cosas/{id}
        [HttpGet("{id}")]
        public async Task<ActionResult<Cosa?>> GetById(int id)
        {
            
            var cosa = await this.context.FindAsync<Cosa>(id);

            if (cosa == null)
                return this.NotFound();

            return cosa;
        }

        // POST api/cosas
        [HttpPost]
        public async Task<ActionResult<Cosa>> Create(Cosa cosa)
        {
            //this.context.Attach(cosa.Categoria);
            await this.context.AddAsync(cosa);
            await this.context.SaveChangesAsync();

            return this.CreatedAtAction(nameof(GetById), new { id = cosa.Id }, cosa);
          
        }

        // PUT api/cosas
        [HttpPut]
        public async Task<ActionResult> Update(Cosa cosa)
        {
            this.context.Update(cosa);
            await this.context.SaveChangesAsync();

            return this.NoContent();

        }

        //DELETE api/cosas/{id}
        [HttpDelete("{id}")]
        public async Task<ActionResult> Delete(int id)
        {
            var cosa = await this.context.FindAsync<Cosa>(id);

            if (cosa == null)
                return this.NotFound();

            this.context.Remove(cosa);
            await this.context.SaveChangesAsync();

            return this.NoContent();
        }
    }
}
