using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using OnlineBusBookingSystem.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace OnlineBusBookingSystem.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class BusBookingDetailsController : ControllerBase
    {
       
        private BusBookingContextDb _context;
        public BusBookingDetailsController(BusBookingContextDb context)
        {
            _context = context;
        }

        [HttpGet]
        [Route("GetAllBookingDetails")]
        public IEnumerable<object> Get()
        {
            var res = (from b in _context.BusDetails
                       join r in _context.Passengers on b.BusId equals r.Busid
                       select new
                       {
                           b.BusId,
                           b.BusName,
                           b.BusNo,
                           b.BusType,
                           r.Id,
                           r.Name,
                           r.SeatNo,
                           r.Gender,
                           r.Phone,
                           r.fare,
                           r.BoardingPoint,
                           r.DropingPoint
                       });
            return res.ToList();

        }
        [HttpDelete]
        [Route("CancelBooking")]
        public Passenger Delete(int id)
        {
            var result = _context.Passengers.Where(x => x.Id == id).FirstOrDefault();
            _context.Attach(result);
            _context.Entry(result).State = Microsoft.EntityFrameworkCore.EntityState.Deleted;
            _context.SaveChanges();
            return result;
        } 
    }
}
