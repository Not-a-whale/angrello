﻿using server.Models;

namespace server.Extensions
{
    public static class AppConfigExtensions
    {
        public static WebApplication ConfigureCORS(
            this WebApplication app,
            IConfiguration config)
        {
            app.UseCors(options =>
            options.WithOrigins("http://localhost:4200", "https://localhost:4200", "http://localhost:5289")
            .AllowAnyMethod()
            .AllowAnyHeader());
            return app;
        }

        public static IServiceCollection AddAppConfig(
            this IServiceCollection services,
            IConfiguration config)
        {
            services.Configure<AppSettings>(config.GetSection("AppSettings"));
            return services;
        }
    }
}
