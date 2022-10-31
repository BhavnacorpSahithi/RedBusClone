using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace OnlineBusBookingSystem.Models
{
    public class PNRDetails
    {
        [Key]
        public int PNRDetailsId { get; set; }
        public string PNRNo { get; set; }
        public float  TotalAmount { get; set; }
        public int TotalTickets { get; set; }
        public int CreatedBy { get; set; }


    }

}
