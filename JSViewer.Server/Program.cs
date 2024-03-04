
using GrapeCity.ActiveReports.Aspnetcore.Designer;
using GrapeCity.ActiveReports.Aspnetcore.Viewer;
using GrapeCity.ActiveReports.Web.Designer;
var builder = WebApplication.CreateBuilder(args);
// Add services to the container.
builder.Services.AddReportViewer();
builder.Services.AddReportDesigner();
builder.Services.AddMvc(options => options.EnableEndpointRouting = false);
var app = builder.Build();
app.UseHttpsRedirection();
if (!app.Environment.IsDevelopment())
{
    app.UseDeveloperExceptionPage();
}
var ResourcesRootDirectory =
    new DirectoryInfo(Path.Combine(Directory.GetCurrentDirectory(), "resources"));
app.UseReportViewer(config => config.UseFileStore(ResourcesRootDirectory));
app.UseReportDesigner(config => config.UseFileStore(ResourcesRootDirectory, null, FileStoreOptions.NestedFoldersLookup));
app.UseDefaultFiles();
app.UseStaticFiles();
app.Run();

