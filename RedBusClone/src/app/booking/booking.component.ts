import { Component, OnInit } from '@angular/core';
import { SignUpModel1 } from '../buses/buses.component';
import { BusService } from '../Services/bus.service';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {
bookingList:any[]=[];
logindata:SignUpModel1[]=[];
item:any={};
  constructor(private service:BusService) { }
 
  ngOnInit(): void {
    this.logindata.push(JSON.parse(localStorage.getItem('logData') || '[]'));
    console.log("logindata",this.logindata);
    this.loadbooking();
  }
  loadbooking(){
    this.service.getAllBooking().subscribe(res=>{
      this.bookingList=res;
      console.log("booking list",this.bookingList);
     })
  }

  delete(id:number){
    if(confirm("Are you sure want to delete this?")){
      this.service.cancelBooking(id).subscribe(data=>{
        console.log(data);
        this.item = data;
        this.loadbooking();
      })
    }
  }
}
