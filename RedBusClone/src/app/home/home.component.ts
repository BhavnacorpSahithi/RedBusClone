import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { BusModel } from '../Models/BusModel';
import { SignUpModel } from '../Models/SignUpModel';
import { BusService } from '../Services/bus.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  signupvalue!:FormGroup;
  signupFormobj:SignUpModel=new SignUpModel();
  IdUpdate:any;
  model:any={};
  modal:any={};
  selectedCountry: any; 
  filter1:any;
value:any;
selectors=["Source","Destination"];
SelectedCriteria =""; 
filterValue = "";
selectSource="";
selectDestination="";
  stringJson?: string;
  stringObject: any;
  newBuses?:BusModel[];
  Buses?:Observable<BusModel[]>;
  busType1:any=[];
logData:any[]=[];
sourcelist:any;
  
  constructor( private formbuilder:FormBuilder,private router:Router,private service:BusService) { 
    this.service.getAllBus().subscribe(res=>{
      this.newBuses=res;
      console.log("new buses",this.newBuses);
     })
  }

  ngOnInit() {
    this.signupvalue = this.formbuilder.group({
      name:['',[Validators.required]],
      email:['',[Validators.required]],
      phone:['',[Validators.required]],
      password:['',[Validators.required]],
      gender :['',[Validators.required]],
     })
    
    sessionStorage.removeItem('Name');    
    sessionStorage.clear();  
  }
  gotoHome(){
   this.router.navigateByUrl('/Filter');
}
login(){
  this.service.Login(this.model).subscribe(
    data=>{
      console.log("data",data);
localStorage.setItem('logData',JSON.stringify(data));
 console.log("log data   ",data);
      if(data!=null)
      {
       alert("Login Succesfull");
      this.router.navigate(['']);

      }
      else{
       alert("Invalid Username and Password");
      }
    }
  )
}

RegisterUser(){
  this.signupFormobj.name=this.signupvalue.value.name;
  this.signupFormobj.email=this.signupvalue.value.email;
  this.signupFormobj.phone=this.signupvalue.value.phone;
  this.signupFormobj.password=this.signupvalue.value.password;
  this.signupFormobj.gender=this.signupvalue.value.gender;
    this.service.Register(this.signupFormobj).subscribe(res=>{
      //console.log(res);
      alert('Register Successfully');
      let ref=document.getElementById('cancel');
      ref?.click()
      this.signupvalue.reset();
      },
    err=>{
      console.log(err);
      alert('something went worng');
    });
  }

  // search code
  loadAllEmp(){
     localStorage.setItem('searchData',JSON.stringify(this.modal));
     this.router.navigate(['/bus']);
   }
 
  
}
