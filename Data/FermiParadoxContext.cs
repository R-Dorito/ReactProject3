using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using FermiParadox.Model;

namespace FermiParadox.Data
{
    public class FermiParadoxContext : DbContext
    {
        public FermiParadoxContext (DbContextOptions<FermiParadoxContext> options)
            : base(options)
        {
        }

        public DbSet<FermiParadox.Model.Person> Person { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
            => optionsBuilder.UseNpgsql("Host=localhost;Database=ritasdatabase;Username=postgres;Password=PostGress123.");
    }
}
