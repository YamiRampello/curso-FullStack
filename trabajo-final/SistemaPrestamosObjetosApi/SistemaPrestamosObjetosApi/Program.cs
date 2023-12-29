using System.Text;
using SistemaPrestamosObjetosApi.DataAccess;
using SistemaPrestamosObjetosApi.Filters;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Mvc.Authorization;
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;
using Microsoft.Net.Http.Headers;
using Microsoft.OpenApi.Models;
using SistemaPrestamosObjetosApi.Domain;

//no olvidar el dispose

var builder = WebApplication.CreateBuilder(args);

builder.Services
    .AddDbContext<SistemaDbContext>(opt =>
    opt.UseSqlServer(builder.Configuration.GetConnectionString("SistemaDb")));


//autenticacion
builder.Services
    .AddAuthentication(JwtBearerDefaults.AuthenticationScheme)
    .AddJwtBearer(opt =>
    {
        opt.SaveToken = true;
        opt.TokenValidationParameters = new TokenValidationParameters()
        {
            IssuerSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes("ClaveDeSeguridadConUnMínimoDe256Bits")),
            ValidateAudience = true, //destinatarios del token
            ValidateIssuer = true, //emisor
            ValidateLifetime = true,
            ValidateIssuerSigningKey = true,
            ValidAudience  = builder.Configuration["Jwt:Audience"],
            ValidIssuer = builder.Configuration["Jwt:Issuer"],
        };
    }
    );

// autodocumentacion de la api
builder.Services
    .AddEndpointsApiExplorer()
    .AddSwaggerGen(opt =>
    {
        opt.AddSecurityDefinition(JwtBearerDefaults.AuthenticationScheme, new OpenApiSecurityScheme()
        {
            In = ParameterLocation.Header,
            Name = HeaderNames.Authorization,
            Scheme = JwtBearerDefaults.AuthenticationScheme
        });

        opt.AddSecurityRequirement(new OpenApiSecurityRequirement()
        {
            [new OpenApiSecurityScheme()
            {
                Reference = new OpenApiReference()
                {
                    Id = JwtBearerDefaults.AuthenticationScheme,
                    Type = ReferenceType.SecurityScheme
                }
            }] = Array.Empty<string>()
        });
    });



builder.Services.AddControllers(opt =>
{
    opt.Filters.Add(new AuthorizeFilter());
    opt.Filters.Add<SistemaFilter>();
});

// Cors
builder.Services.AddCors(options => 
    options.AddPolicy("AllowWebapp",
        builder => builder
                    .AllowAnyOrigin()
                    .AllowAnyHeader()
                    .AllowAnyMethod()
                    )
    );


var app = builder.Build();

// endPoints de swagger
app.UseSwagger();
app.UseSwaggerUI();

app.UseAuthentication();

app.UseCors("AllowWebapp");

app.MapControllers();

app.Run();