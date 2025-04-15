var builder = WebApplication.CreateBuilder(args);
var app = builder.Build();

app.UseDefaultFiles(); // Serve index.html por padrão
app.UseStaticFiles(); // Permite servir arquivos da pasta wwwroot

app.MapGet("/sobre", async context =>
{
await context.Response.SendFileAsync("wwwroot/sobre.html");
});

app.Run();
