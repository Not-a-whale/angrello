using Microsoft.EntityFrameworkCore;
using server.Models;

namespace server.Extensions
{
    public static class EFCoreExtensions
    {
        public static IServiceCollection InjectDbContext(
            this IServiceCollection services,
            IConfiguration config)
        {
            services.AddDbContext<AppDbContext>(options =>
                     options.UseSqlServer(config.GetConnectionString("angrellodb")));
            return services;
        }
    }
}
