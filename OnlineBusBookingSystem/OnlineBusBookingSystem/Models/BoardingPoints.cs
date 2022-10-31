using OnlineBusBookingSystem.Models;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace OnlineBusBookingSystem.Models
{
    public class BoardingPoints
    {
        [Key]
        public int StandID { get; set; }
        public string BoardingPoint { get; set; }
        public string DropingPoint { get; set; }
        [ForeignKey("RouteDetails")]
        public int RouteID { get; set; }
        public RouteDetails RouteDetails { get; set; }
    }
}
