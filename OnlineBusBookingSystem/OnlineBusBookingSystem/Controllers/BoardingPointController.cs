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
    public class BoardingPointController : ControllerBase
    {
        private readonly BusBookingContextDb _context;
        public BoardingPointController(BusBookingContextDb context)
        {
            _context = context;
        }

        [HttpPost]
        [Route("BoardingDetails/{boarding}")]
        public object Get(string boarding)
        {

        var   Res = (from r in _context.RouteDetails
                       join b in _context.BoardingPoints
                        .Where(b=>b.BoardingPoint.EndsWith(boarding))
                     on r.RouteID equals b.RouteID

                       select new
                       {
                           b.StandID,
                           r.Source,
                           r.Destination,
                           b.BoardingPoint,
                           b.DropingPoint,
                           b.RouteID
                       }).ToList();
            return Res;
        }
        [HttpGet]
        [Route("GetDetails")]
        public List<BoardingPoints> GetDetails(BoardingPoints boarding)
        {
            List<BoardingPoints> objlist = _context.BoardingPoints.ToList();
            return objlist;
        }
    }
}
