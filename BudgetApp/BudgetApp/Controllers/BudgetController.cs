using Breeze.ContextProvider;
using Breeze.ContextProvider.EF6;
using Breeze.WebApi2;
using BreezeInventoryMgt.DomainModel;
using BreezeInventoryMgt.Models;
using Newtonsoft.Json.Linq;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace BreezeInventoryMgt.Controllers
{
    [BreezeController]
    public class BudgetController : ApiController
    {
        readonly EFContextProvider<BudgetDbContext> _contextProvider =
            new EFContextProvider<BudgetDbContext>();

        // ~/breeze/Budget/Metadata
        [HttpGet]
        public string Metadata()
        {
            return _contextProvider.Metadata();
        }

        // ~/breeze/Budget/EntriesOfBudget
        // ~/breeze/Budget/EntriesOfBudget?$filter=IsArchived eq false&$orderby=CreatedAt 
        [HttpGet]
        public IQueryable<BudgetEntry> EntriesOfBudget()
        {
            return _contextProvider.Context.EntriesOfBudget;
        }


        // ~/breeze/Budget/SaveChanges
        [HttpPost]
        public SaveResult SaveChanges(JObject saveBundle)
        {
            return _contextProvider.SaveChanges(saveBundle);
        }
    }
}
