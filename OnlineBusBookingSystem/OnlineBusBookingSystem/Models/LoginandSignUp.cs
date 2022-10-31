using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace OnlineBusBookingSystem.Models
{
    public class LoginandSignUp
    {
        [Key]
        public int Id { get; set; }
        public string Name { get; set; }

        public string Email { get; set; }
        public string Phone { get; set; }
        public string Password { get; set; }
        public string Gender { get; set; }
    }
    public class LoginResponse
    {
        public string Name { get; set; }
        public bool IsSuccess { get; set; }
        public string Message { get; set; }
    }
}
