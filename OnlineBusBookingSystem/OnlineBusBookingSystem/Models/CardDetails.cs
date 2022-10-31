using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace OnlineBusBookingSystem.Models
{
    public class CardDetails
    {
        [Key]
        public int CardID { get; set; }
        public string CardType { get; set; }
        public string BankName { get; set; }
        public string CVVNo { get; set; }
        public string CardNo { get; set; }
        public float TotalAmount { get; set; }
        [ForeignKey("LoginandSignUp")]
        public int Id { get; set; }
        public LoginandSignUp LoginandSignUp { get; set; }

    }
}
