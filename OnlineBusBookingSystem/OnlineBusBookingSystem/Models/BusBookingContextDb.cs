using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace OnlineBusBookingSystem.Models
{

    public class BusBookingContextDb : DbContext
    {
        public BusBookingContextDb()
        {
        }

        public BusBookingContextDb(DbContextOptions<BusBookingContextDb> options)
                : base(options)
        {
        }
        public DbSet<BusDetails> BusDetails { get; set; }
        public DbSet<LoginandSignUp> LoginandSignUps { get; set; }

        public DbSet<CardDetails> CardDetails { get; set; }
        public DbSet<RouteDetails> RouteDetails { get; set; }
        public DbSet<PNRDetails> PNRDetails { get; set; }
        public DbSet<ScheduleDetails> ScheduleDetails { get; set; }
        public DbSet<BoardingPoints> BoardingPoints { get; set; }
        public DbSet<Passenger> Passengers { get; set; }


    }
}
