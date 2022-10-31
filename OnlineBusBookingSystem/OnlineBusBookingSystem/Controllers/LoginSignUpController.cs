using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using OnlineBusBookingSystem.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Threading.Tasks;

namespace OnlineBusBookingSystem.Controllers
{
    [Route("api/[controller]")]
    //[EnableCors]
    [ApiController]
    public class LoginSignUpController : ControllerBase
    {
        private readonly BusBookingContextDb _loginandSignUpContext;
        public LoginSignUpController(BusBookingContextDb loginandSignUpContext)
        {
            _loginandSignUpContext = loginandSignUpContext;
        }


        [Route("Register")]
        [HttpPost]
        public LoginandSignUp Register(LoginandSignUp loginandSignUp)
        {
            try
            {
                if (loginandSignUp != null)
                {
                    _loginandSignUpContext.LoginandSignUps.Add(loginandSignUp);
                    _loginandSignUpContext.SaveChanges();
                }
                

            }
            catch (Exception)
            {

                throw;
            }
            return loginandSignUp;

        }
        [Route("Registerupdate")]
        [HttpPost]
        public Passenger RegisterUpdate(Passenger loginandSignUp)
        {
            try
            {
                if (loginandSignUp == null)
                {
                    return null;
                }
                else
                {
                    _loginandSignUpContext.Passengers.Add(loginandSignUp);
                    _loginandSignUpContext.SaveChanges();
                }


            }
            catch (Exception)
            {

                throw;
            }
            return loginandSignUp;

        }

        [Route("Login")]
        [HttpPost]

        public IActionResult Login(LoginandSignUp loginandSignUp)
        {
            LoginResponse response = new LoginResponse();

            try
            {
                var loginDetail =   _loginandSignUpContext.LoginandSignUps.Where(p => p.Email == loginandSignUp.Email && p.Password == loginandSignUp.Password).FirstOrDefault();
                if (loginDetail == null)
                {
                    response.Message = "invalid credentials";
                }
                return Ok(loginDetail);

            }
            catch (Exception ex)
            {
                response.IsSuccess = false;
                response.Message = "failed" + ex.Message.ToString();
               
                return BadRequest();

            }


        }
        

    }
    }

