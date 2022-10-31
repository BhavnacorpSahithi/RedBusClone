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
    public class PaymentController : ControllerBase
    {
        private BusBookingContextDb _context;
        public PaymentController(BusBookingContextDb context)
        {
            _context = context;
        }

        [HttpGet]
        [Route("Getpaymentdetails")]
        public IActionResult Get()
        {
            var pay = _context.CardDetails.ToList();
            return Ok(pay);

        }

        [Route("PaymentDetails")]
        [HttpPost]
      public CardDetails Payment(CardDetails payment)
        {
            if (payment.Id != null)
            {
                var payments = _context.CardDetails.Add(payment);
                _context.SaveChanges();
            }

            return payment;
        }



    }
}
