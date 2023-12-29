using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using SistemaPrestamosObjetosApi.Constants;
using SistemaPrestamosObjetosApi.Models;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using SistemaPrestamosObjetosApi.Domain;
using Microsoft.IdentityModel.Tokens;
using System.Text;
using System.CodeDom.Compiler;


namespace SistemaPrestamosObjetosApi.Controllers
{
    [AllowAnonymous]
    [ApiController]
    [Route("api/[controller]")]

    public class LoginController : ControllerBase
    {
        private readonly IConfiguration _config;
        public LoginController(IConfiguration config)
        {
        _config = config;
        }


        [HttpPost]
        public IActionResult Login(LoginUser userLogin)
        {
            var user = Authenticate(userLogin);

            if (user != null)
            {
                //crear token
                var token = Generate(user);


                return Ok(token);

            }
            return NotFound("usuario no encontrado");
            
        }
        private UserModel Authenticate(LoginUser userLogin)
        {
            var currentUser = UserConstants.Users.FirstOrDefault(user =>
                                    user.UserName.ToLower() == userLogin.UserName.ToLower() &&
                                    user.Password == userLogin.Password);
            
            if(currentUser != null)
            {
                return currentUser;
            }
            
            return null;
        }

        private string Generate(UserModel user)
        {
            var securityKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes("ClaveDeSeguridadConUnMínimoDe256Bits"));
            var credentials = new SigningCredentials(securityKey, SecurityAlgorithms.HmacSha256);


            //crear claims
            var claims = new[]
            {
            new Claim(ClaimTypes.NameIdentifier, user.UserName),
            new Claim(ClaimTypes.Email, user.Email),
            new Claim(ClaimTypes.GivenName, user.Nombre),
            new Claim(ClaimTypes.Surname, user.Apellido),
            new Claim(ClaimTypes.Role, user.Rol)
            };

            //crear token
            var token = new JwtSecurityToken(
                _config["Jwt:Issuer"],
                _config["Jwt:Audience"],
                claims,
                expires: DateTime.Now.AddMinutes(60),
                signingCredentials: credentials);

           
            return new JwtSecurityTokenHandler().WriteToken(token);
                
        }


    }
}

