using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace OnlineBusBookingSystem.Models
{
    public class Passenger
    {
            [Key]
            public int Id { get; set; }
            public string Name { get; set; }

            public string Email { get; set; }
            public string Phone { get; set; }
            public string Gender { get; set; }
            public string SeatNo { get; set; }
            public string BoardingPoint { get; set; }
           public string DropingPoint { get; set; }

        public int fare { get; set; }
        public int Busid { get; set; }
        public int userid { get; set; }

    }
}
