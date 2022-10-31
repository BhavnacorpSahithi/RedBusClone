import { Injectable } from '@angular/core';
import{HttpClient,HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { SeatsModel } from '../Models/Seats-model';
import { BoardingModel } from '../Models/Boarding-Model';



@Injectable({
  providedIn: 'root'
})
export class SeatBookingService {

  name:String="";
  result:String="";
  amount:string="";
  board:string="";
  drop:string="";
BusId:any;
ID:any;

url='http://localhost:53585/api/BusBookingDetails/'
boaringurl='http://localhost:53585/api/BoardingPoint/'
  constructor(private http:HttpClient) { }

  // getEmployee(bus:BusModel):Observable<BusModel[]>{


  //   return this.http.post<BusModel[]>(this.url+'GetAll',bus,httpOptions);

  // }

  getBySource(source:string):Observable<any>{
    debugger;
    const httpOptions={headers:new HttpHeaders({'Content-Type':'application/json'})}
    return this.http.post<any>(this.boaringurl+'BoardingDetails/'+source,httpOptions);
  }
  getBookingDetails():Observable<SeatsModel[]>{
    return this.http.get<SeatsModel[]>(this.url+'GetAllBookingDetails');
  }


  
   createtodo(busId:any,Id:any,seatno:string,totalamt:number,Boardingponit:string,DroppingPoint:string){
    debugger;
    const httpOptions={headers:new HttpHeaders({'Content-Type':'application/json'})}
    return  this.http.post<SeatsModel>(this.url+'Booktheseats',{
    BusId:busId,
    ID:Id,
    name: seatno,
    amount:totalamt,
    board:Boardingponit,
    drop:DroppingPoint

    },httpOptions).subscribe((data:any)=>{
      this.result= data;
    });
  }

  getDropdownValues():Observable<BoardingModel[]>{
    return this.http.get<BoardingModel[]>(this.boaringurl+'GetBoardingPointDetails');
  }

}
