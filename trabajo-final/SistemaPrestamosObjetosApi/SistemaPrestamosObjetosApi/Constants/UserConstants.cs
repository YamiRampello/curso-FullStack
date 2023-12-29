using SistemaPrestamosObjetosApi.Domain;
using SistemaPrestamosObjetosApi.Models;

namespace SistemaPrestamosObjetosApi.Constants
{
    public class UserConstants
    {
        public static List<UserModel> Users = new List<UserModel>()
        {
        new UserModel(){ UserName = "jperez", Password="admin123", Rol="Administrador", Nombre="Juana", Apellido="Perez", Email= "jperez@gmail.com"},
        new UserModel(){ UserName = "mgonzalez", Password="admin123", Rol="Otro", Nombre="Maria", Apellido="Gonazalez", Email= "mgonzalez@gmail.com"}
        };
    }
}
