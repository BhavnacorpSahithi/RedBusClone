import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { BusModel } from './Models/BusModel';
import { SignUpModel } from './SignUpModel';

@Injectable({
  providedIn: 'root'
})

export class CommonService {

 
  constructor() { }
private Username=new BehaviorSubject({});
name=this.Username.asObservable();

Loginmodel(modal:SignUpModel)
{
  this.Username.next(modal);
}
  private searchBuses = new BehaviorSubject({});
  currentBussearch = this.searchBuses.asObservable();

  OnBusSearchmodel(modal:BusModel){
   // debugger;
    this.searchBuses.next(modal)
  }

}
