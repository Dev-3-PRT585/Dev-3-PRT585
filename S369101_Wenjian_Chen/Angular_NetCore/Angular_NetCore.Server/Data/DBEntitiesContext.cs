using Angular_NetCore.Server.Models;
using Microsoft.EntityFrameworkCore;

namespace Angular_NetCore.Server.Data
{
    public class DBEntitiesContext:DbContext
    {
        public DBEntitiesContext(DbContextOptions<DBEntitiesContext> options) : base(options)
        {
        }

        public DbSet<Customer> Customers { get; set; } // Customer>
    }
}
