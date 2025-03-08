using E_commerce.Models.Domain;
using Microsoft.EntityFrameworkCore;

namespace E_commerce.Data
{
    public class AppDbContext : DbContext 
    {
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) { }

       public DbSet<Product> Products { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            // ✅ Seeding Sample Products
            modelBuilder.Entity<Product>().HasData(
                new Product { Id = 1, Name = "Laptop", Description = "Gaming Laptop", Price = 1200, ImageUrl = "https://images.app.goo.gl/UFRurDkJGSdPdV9C8" },
                new Product { Id = 2, Name = "Phone", Description = "Smartphone", Price = 800, ImageUrl = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwxnBzknPfuD0IyDqO4IuSvxKib8tK-gCbww&s" },
                new Product { Id = 3, Name = "Headphones", Description = "Wireless headphones", Price = 150, ImageUrl = "https://cdn.thewirecutter.com/wp-content/media/2023/07/bluetoothheadphones-2048px-0876.jpg" },
                new Product { Id = 4, Name = "Smartwatch", Description = "Fitness tracker", Price = 200, ImageUrl = "https://shop.mobily.com.sa/wp-content/uploads/2023/09/blue-black.png" }
            );
        }

    }
}
