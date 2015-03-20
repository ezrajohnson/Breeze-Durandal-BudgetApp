using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Runtime.Serialization;

namespace BreezeInventoryMgt.DomainModel
{

    public class BudgetEntry
    {
        internal BudgetEntry()
        {
        }

        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.None)]
        [Required]
        public Guid Id { get; internal set; }

        [Required]
        public int SNo { get; internal set; }

        [Required]
        public string EntryDate { get; set; }

        [Required]
        public string Description { get; set; }
        [Required]
        public int Source { get; set; }
        [Required]
        public int Credit { get; set; }
        [Required]
        public int Debit { get; set; }

    }
}