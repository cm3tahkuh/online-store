using Backend.Models;
using Microsoft.EntityFrameworkCore;
using OnlineStoreApi.Models;

namespace OnlineStoreApi.Context
{
    public class ApplicationContext : DbContext
    {


        public DbSet<Content> Contents { get; set; }
        public DbSet<Cart> Carts { get; set; }
        public DbSet<Product> Products { get; set; }

        public ApplicationContext(DbContextOptions<ApplicationContext> options) : base(options)
        {
            Database.EnsureCreated();
        }
    }
}
