using Breeze.ContextProvider;
using BreezeInventoryMgt.DomainModel;
using Newtonsoft.Json.Linq;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;

namespace BreezeInventoryMgt.Models
{
    public class BudgetDbContext : DbContext 
    {
        // DEVELOPMENT ONLY: initialize the database
        static BudgetDbContext()
        {
            Database.SetInitializer(new DynamicDbInitializer());
        }
        public DbSet<BudgetEntry> EntriesOfBudget { get; set; }

    }
}