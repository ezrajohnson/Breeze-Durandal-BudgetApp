using BreezeInventoryMgt.DomainModel;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;

namespace BreezeInventoryMgt.Models
{
    public class DynamicDbInitializer : DropCreateDatabaseAlways<BudgetDbContext>
    {
        private static List<BudgetEntry> BudgetEntriesTemp;

        protected override void Seed(BudgetDbContext context)
        {
            SeedDatabase(context);
        }

        public static void SeedDatabase(BudgetDbContext context)
        {
            BudgetEntriesTemp = new List<BudgetEntry>();
            for (int i = 1; i <= 50; i++)
            {
                BudgetEntriesTemp.Add(new BudgetEntry
                                        {
                                            Id = Guid.NewGuid(),
                                            SNo = i,
                                            EntryDate = "10/01/2015",
                                            Description = "This is the description"+i,
                                            Source = 1,
                                            Credit = 10*i,
                                            Debit = 20*i
                                        });
            }

            BudgetEntriesTemp.ForEach(e => context.EntriesOfBudget.Add(e));


            context.SaveChanges(); // Save 'em
        }
    }
}