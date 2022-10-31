using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace OnlineBusBookingSystem.Models
{
    public class ScheduleDetails
    {
        [Key]
        public int ScheduleId { get; set; }
       public int BusId { get; set; }

       public int RouteID { get; set; }
        public float Fare { get; set; }

        public string DepatureTime { get; set; }
        public string EstimatedTime { get; set; }
        public string ArrivalTime { get; set; }
        
    }
}
