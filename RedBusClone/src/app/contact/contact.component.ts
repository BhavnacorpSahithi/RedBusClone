import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SignUpModel1 } from '../buses/buses.component';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  name:string='';
  email:string='';
  phone:string='';
  message:string='';
  logindata:SignUpModel1[]=[];

  constructor(private router:Router) {}

  ngOnInit(): void {
    this.logindata.push(JSON.parse(localStorage.getItem('logData') || '[]'));
    console.log("logindata",this.logindata);
  }
  submitForm()
  {
    const result=`My Name is ${this.name}.My Email is ${this.email}. My PhoneNumber is ${this.phone}.My Message is ${this.message}`;
    alert(result);
  
  }

}
