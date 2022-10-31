using Microsoft.AspNetCore.Mvc;
using Microsoft.Data.SqlClient;
using Microsoft.EntityFrameworkCore;
using OnlineBusBookingSystem.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace OnlineBusBookingSystem.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class BusDetailsController : ControllerBase
    {
        private BusBookingContextDb _context;
        public BusDetailsController(BusBookingContextDb context)
        {
            _context = context;
        }

        [HttpGet]
        [Route("GetAllBuseDetails")]
        public IEnumerable<BusDetails> Get()
        {
            return _context.BusDetails.ToList();

        }
        [HttpPost]
        [Route("GetAll")]
        public object GetAll(RouteDetails route)
{
          
            var res = (from b in _context.BusDetails
                       join s in _context.ScheduleDetails on b.BusId equals s.BusId
                       join r in _context.RouteDetails
                     .Where(r => r.Source == route.Source && r.Destination == route.Destination && r.bus_date == route.bus_date)
                       on s.BusId equals r.BusId 
                      
                       select new
                       {
                           b.BusId,
                           b.BusName,
                           b.BusNo,
                           b.BusType,
                           b.TotalSeats,
                           s.Fare,
                           s.EstimatedTime,
                           s.DepatureTime,
                           s.ArrivalTime,
                           r.Source,
                           r.Destination,
                           r.bus_date,
                           b.AvailableSeats
                       }).ToList();
           return res;
        }

        [HttpPut("{id}")]
        public IActionResult Put(int id, [FromBody] BusDetails r)
        {
            var route = _context.BusDetails.Where(s => s.BusId == id).FirstOrDefault();
            _context.BusDetails.Remove(route);
            _context.BusDetails.Add(r);
            _context.SaveChanges();

            return Ok(r);
        }

        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}

















//[HttpGet]
//[Route("GetBusDetails")]
//public List<RouteDetails> GetBusDetails(BusDetails busDetails)
//{
//   // var res = _context.RouteDetails.Where(x=> x.BusId == busDetails.BusId).ToList();

//   // return res;
//}



//[HttpGet]
//[Route("GetAll/{value}")]
//public List<BusDetails> GetAll(string value)
//{
//    var res = _context.BusDetails.Where(x => x.BusType == value).ToList();

//    return res;
//}


//[HttpGet]
//[Route("Buses/{Source}/{Destination}/{value}")]
//public List<BusDetails> GetOrdersByCustName(string Source,string Destination, string value)
//{
//    List<BusDetails> Res = new List<BusDetails>();

//    Res = (from c in _context.BusDetails
//                  where 
//                   c.Source ==Source && c.Destinaion== Destination &&
//                   c.bus_date==value

//           select c).ToList();

//    return Res;
//}
//[HttpGet("{id}")]
//public string Get(int id)
//{
//    return "value";
//}

//[HttpPost]
//public void Post([FromBody] string value)
//{
//}
//            select BM.BusId,BM.BusName,BM.BusNo,BM.BusType,BM.TotalSeats,BM.AvailableSeats,SM.Fare,SM.EstimatedTime,SM.DepatureTime,SM.ArrivalTime
//from dbo.BusDetails BM
//left join dbo.ScheduleDetails SM
//on SM.BusId = BM.BusId
//left join dbo.RouteDetails RD
//on RD.RouteID = SM.RouteID
//where RD.bus_date = @bus_date and RD.Source = @Source and RD.Destination = @Destination

//var res = (from route in _context.RouteDetails ,from bus in _context.BusDetails,route
//           join bus in _context.BusDetails on route.BusId equals bus.BusId
//           join Schedule in _context.ScheduleDetails on bus.BusId equals Schedule.BusId
//           where(route.Source==route1.Source && route.Destination ==route1.Destination)
//           select new
//           {
//               route.Source,
//               route.Destination,
//               route.bus_date,
//               bus.BusNo,
//               bus.BusName,
//               bus.BusType,
//               bus.AvailableSeats,
//               bus.TotalSeats,
//               Schedule.Fare
//           }).ToList();

// string StoredProc = "exec ispGetAvailableBusDetails " +
//"@Source = '" + route.Source + "'," +
//"@Destination = '" + route.Destination + "'," +
//"@bus_date= '" + route.bus_date + "'";
// "@RoteID= " + route.RouteID + "" ;

//  var res=  await _context.RouteDetails.FromSqlRaw(StoredProc).ToListAsync();
// var res = _context.RouteDetails.Where(x => x.Source == route.Source && x.Destination == route.Destination && x.bus_date == route.bus_date && x.BusId==route.BusId).ToList();

