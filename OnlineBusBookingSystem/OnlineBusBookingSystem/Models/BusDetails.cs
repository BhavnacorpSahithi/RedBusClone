using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace OnlineBusBookingSystem.Models
{
    public class BusDetails
    {
        [Key]
        public int BusId
        { get; set; }
        public string BusNo { get; set; }
        public string BusName { get; set; }
        public string BusType { get; set; }
        public int BookedSeats { get; set; }
        public int AvailableSeats { get; set; }
      
        public string CreatedDate { get; set; }

        public int TotalSeats { get; set; }
        
        
    }
}
