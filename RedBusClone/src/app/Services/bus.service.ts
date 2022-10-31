import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Passenger } from '../Models/SignUpModel';
import { BusModel } from '../Models/BusModel';


@Injectable({
  providedIn: 'root'
})


export class BusService {
  SignUpUrl="http://localhost:53585/api/LoginSignUp/"
  url='http://localhost:53585/api/BusDetails/'
  paymentUrl="http://localhost:53585/api/Payment/"
  //http://localhost:53585/api/LoginSignUp/
  bookingUrl='http://localhost:53585/api/BusBookingDetails/'
  
  header: any;
    constructor(private http:HttpClient) {
    
     }
    
    Login(signUp: any){  
       return this.http.post(this.SignUpUrl+'Login',signUp,{ headers: this.header});  
    }  
    Register(signUp:any){
      //const httpOptions={headers:new HttpHeaders({'Content-Type':'application/json'})}
      return this.http.post<any>(this.SignUpUrl+'Register',signUp).
      pipe(map(res=>{
          return res;
      }));
    }
    Passenger(pass:Passenger):Observable<Passenger>{
      debugger;
      const httpOptions={headers:new HttpHeaders({'Content-Type':'application/json'})}
      return this.http.post<Passenger>(this.SignUpUrl+'Registerupdate',pass,httpOptions);
    }

    getAllBus():Observable<BusModel[]>{
      return this.http.get<BusModel[]>(this.url+'GetAllBuseDetails');
    }
    getAllBooking():Observable<any[]>{
      return this.http.get<any[]>(this.bookingUrl+'GetAllBookingDetails');
    }
    cancelBooking(id:any):Observable<any>{
      debugger;
      const httpOptions={headers:new HttpHeaders({'Content-Type':'application/json'})}
      return this.http.delete<any>(this.bookingUrl+'CancelBooking?id='+id,httpOptions);
    }
    //http://localhost:53585/BusBookingDetails//2
    getEmployee(bus:BusModel):Observable<BusModel[]>{

      const httpOptions={headers:new HttpHeaders({'Content-Type':'application/json'})}
  
      return this.http.post<BusModel[]>(this.url+'GetAll',bus,httpOptions);
  
    }
    // getAll(bus:BusModel):Observable<BusModel[]>{
    //   return this.http.get<BusModel[]>(this.url+'GetAll',bus);
    // }
    GetValue(value:string):Observable<BusModel>{
      return this.http.get<BusModel>(this.url+'GetAll/'+value);
    }
    //GetAll/{value}
    
    getEmployeeByBusType(source:string,destination:string,value:string):Observable<BusModel>{
      return this.http.get<BusModel>(this.url+'Buses/'+source+"/"+destination+"/"+value);
    }
//http://localhost:53585/api/BusDetails/Buses/hyderabad/bangalore/19-10-2022   

    createEmployee(bus:BusModel):Observable<BusModel>{
      const httpOptions={headers:new HttpHeaders({'Content-Type':'application/json'})}
      return this.http.post<BusModel>(this.url+'InsertEmployeeDetails',bus,httpOptions);
    }


    updateEmployee(bus:BusModel):Observable<BusModel>{
      const httpOptions={headers:new HttpHeaders({'Content-Type':'application/json'})};
      return this.http.put<BusModel>(this.url+'UpdateEmployeeDetails/',bus,httpOptions);
    }


    deleteEmployeeById(BusId:string):Observable<number>{
      const httpOptions={headers:new HttpHeaders({'Content-Type':'application/json'})}
      return this.http.delete<number>(this.url+'/DeleteOfEmployee?id='+BusId,httpOptions);
    }
  

    // payment details
    Payment(payment:any){
      debugger;
      //const httpOptions={headers:new HttpHeaders({'Content-Type':'application/json'})}
      return this.http.post<any>(this.paymentUrl+'PaymentDetails',payment).
      pipe(map(res=>{
          return res;
      }));
    }
    // view seats
    
  }
 
