import { Component, OnInit } from '@angular/core';
import { SignUpModel1 } from '../buses/buses.component';

@Component({
  selector: 'app-privacy',
  templateUrl: './privacy.component.html',
  styleUrls: ['./privacy.component.css']
})
export class PrivacyComponent implements OnInit {
  logindata:SignUpModel1[]=[];
  constructor() { }

  ngOnInit(): void {
    this.logindata.push(JSON.parse(localStorage.getItem('logData') || '[]'));
    console.log("logindata",this.logindata);
  }

}
