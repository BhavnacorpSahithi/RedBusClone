using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace OnlineBusBookingSystem.Models
{
    public class RouteDetails
    {
        [Key]
        public int RouteID { get; set; }
        public string Source { get; set; }
        public string Destination { get; set; }

        public  string bus_date { get; set; }
        [ForeignKey("BusDetails")]
        public int BusId { get; set; }
      public BusDetails BusDetails { get; set; }

    }
   
}
