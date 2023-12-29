using Microsoft.AspNetCore.Mvc.Filters;

namespace SistemaPrestamosObjetosApi.Filters
{
    public class SistemaFilter: IActionFilter
    {
        private readonly ILogger logger;

        public SistemaFilter(ILogger<SistemaFilter> logger) => this.logger = logger;

        public void OnActionExecuting(ActionExecutingContext context)
        {
            this.logger.LogInformation("probar filtro");

        }

        public void OnActionExecuted(ActionExecutedContext context)
        {
            this.logger.LogInformation("Filtro: luego de haber ejecutado la acción del controller");
        }
    }
}