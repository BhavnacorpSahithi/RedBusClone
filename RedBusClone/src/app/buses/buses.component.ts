import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BoardingModel } from '../Models/Boarding-Model';
import { BusModel } from '../Models/BusModel';
import { PaymentModel } from '../Models/PaymentModel';
import { busSeats, Passenger } from '../Models/SignUpModel';
import { BusService } from '../Services/bus.service';
import { SeatBookingService } from '../Services/seat-booking.service';

export class  SignUpModel1 {
	id:string='';
  name:string='';
	email:string='';
	phone:string='';
	password:string='';
	gender:string='';

}
@Component({
  selector: 'app-buses',
  templateUrl: './buses.component.html',
  styleUrls: ['./buses.component.css']
})

export class BusesComponent implements OnInit {

modal:any={};
allEmployees:BusModel[]=[];
allEmployee:any[]=[];
logindata:SignUpModel1[]=[];
PaymentObj:PaymentModel =new PaymentModel();
paymentvalue!:FormGroup;
PassengerObj:Passenger =new Passenger();
passengervalue!:FormGroup;
Bank:any []=['Bank Of India','ICICI Bank','State Bank Of India','HDFC Bank','Bank Of Baroda'];
boardingPoint:any;
dropingPoint:any;
selectedList:busSeats[]=[];
select:any;
isChecked:any;
busSeats:busSeats[]=[];
seat:any={};
seatnum:string='';
amount:number=1900;
passenger:any={};
payment:any={};
details:any;
BusID:any;
Id:any;
source:string='Hyderabad';
searchData:any={};
testModel?:BoardingModel[];
viewSeatToggle:boolean=false;
sourceList:any[]=[];
result1: any ;
randomstring:any;
codeGenerated:any;

constructor(private service:BusService,private formbuilder:FormBuilder,private api:SeatBookingService,private router:Router) { }

ngOnInit() {
  this.paymentvalue = this.formbuilder.group({
    
    cardtype:['',[Validators.required]],
    bankname:['',[Validators.required]],
    cvvno:['',[Validators.required]],
    cardno:['',[Validators.required]],
    totalamount:['',[Validators.required]],
    id:['',[Validators.required]],
   })
   this.passengervalue = this.formbuilder.group({
    seatno:['',[Validators.required]],
    name:['',[Validators.required]],
    gender:['',[Validators.required]],
    phone:['',[Validators.required]],
    email:['',[Validators.required]],
   })
  this.logindata.push(JSON.parse(localStorage.getItem('logData') || '[]'));
   console.log("logindata",this.logindata);

// console.log("source in bus",localStorage.getItem('sourceinhome'));
 this.searchData = localStorage.getItem('searchData'); 
 console.log("source",JSON.parse(this.searchData));
  this.service.getEmployee(this.searchData).subscribe(res=>{
    this.allEmployees=res;
    console.log("result",res);
  }
  )
//  view seats
this.busSeats =
[{seatno:'1A', checked:false},
{seatno: '2A', checked: false},
{seatno: '3A', checked: false},
{seatno: '4A', checked: false},
{seatno: '5A', checked: false},
{seatno: '6A', checked: false},
{seatno: '7A', checked: false},
{seatno: '8A', checked: false},
{seatno: '9A', checked: false},
{seatno: '10A', checked: false},
{seatno: '11A', checked: false},
{seatno: '12A', checked: false},
{seatno: '13A', checked: false},
{seatno: '14A', checked: false},
{seatno: '15A', checked: false},
{seatno: '16A', checked: false},
{seatno: '17A', checked: false},
{seatno: '18A', checked: false},
{seatno: '19A', checked: false},
];
this.getboardingdetails();
}


// logout
logout(){
  localStorage.clear();
}

PaymentSubmit(){
 // debugger;
  this.logindata.map(x=>{
    this.payment.id = x.id;
    //console.log("pasanger id",this.payment.id);
  })
  this.allEmployees.map(x=>{
    this.payment.totalamount = x.fare;
   // console.log("pasanger fare",this.passenger.totalamount);
  })
  this.service.Payment(this.payment).subscribe(
    data=>{
      if(data.id!=null)
      {
       alert("saved Succesfull");
       this.payment.cardno='';
       this.payment.cvvno='';
       this.payment.bankname='';
       this.payment.cardtype='';
      // console.log("data",data);
      }
      else{
       alert("Please Login to continue");
       this.router.navigate([''])
      }
    }
    )
  }
PassengerSubmit(){
  debugger;
  this.selectedList.map(x=>{
    this.passenger.seatno = x.seatno;
    console.log("pasanger seatno",this.passenger.seatno);
  })
  this.allEmployees.map(x=>{
    this.passenger.busid = x.busId;
    this.passenger.fare = x.fare;
    console.log("pasanger fare",this.passenger.busid);
  })
  this.logindata.map(x=>{
    this.passenger.userid = x.id;
    console.log("pasanger userid",this.passenger.userid);
  })
 this.passenger.boardingPoint = this.boardingPoint;
 this.passenger.dropingPoint = this.dropingPoint;
  this.service.Passenger(this.passenger) .subscribe(data=>{
      alert("success");
      console.log("data",data);
      if(data!=null)
      {
        this.passenger.reset();
       alert("saved Succesfull");
      }
      else{
       alert("Invalid data and Password");
      }
     }
  )
  console.log("pasanger",this.passenger);
}
onViewSeat(){
  this.viewSeatToggle = !this.viewSeatToggle;

}

onBusSelect(seat:any,ind:number){
  if(seat.checked){
    this.selectedList.push(seat);
    console.log(this.selectedList,"selectedlist");
  }
  else{
    this.selectedList = this.selectedList.filter((x:any) => x.checked == true);
    console.log(this.selectedList,"selectedlist");
  }

}

BookSeat(){
  //debugger;
this.details=this.api.createtodo(this.BusID,this.Id,this.seat,this.amount,this.boardingPoint,this.dropingPoint);
console.log(this.details);
 
}

getboardingdetails(){
  debugger;
  this.api.getBySource(this.source).subscribe((data:any) => {
    if(data) {
      this.testModel = data;
      console.log("source",this.testModel);
    }
  } );
}
randomString() {
  const chars = '0123456789';
  const stringLength = 10;
  this.randomstring=Math.floor((Math.random() * 1000) + 1);
 this.codeGenerated = this.randomstring;
 alert("ur otp :"+this.codeGenerated);
 }
}

//



// count(){
//   this.selectedList.map(value => {
//     var sum=0;
//     sum = value.seatno.length;
//     console.log("sum",sum);
//    console.log("value",value.seatno.length)});
// }

//view seats
// onUsernameChanged(value:any){
//   this.boardingpoint=value;
//   alert(this.boardingpoint);
// }
// onDroppingChanged(value:any){
//   this.dropingpoint=value;
// }



