using Backend.Models;
using Microsoft.EntityFrameworkCore;

namespace OnlineStoreApi.Context
{
    public class ApplicationContext : DbContext
    {


        public DbSet<Content> Contents { get; set; }

        public ApplicationContext(DbContextOptions<ApplicationContext> options) : base(options)
        {
            Database.EnsureCreated();
        }
    }
}
