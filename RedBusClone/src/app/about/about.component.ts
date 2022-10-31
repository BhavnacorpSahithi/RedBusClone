import { Component, OnInit } from '@angular/core';
import { SignUpModel1 } from '../buses/buses.component';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  logindata:SignUpModel1[]=[];

  constructor() { }

  ngOnInit(): void {
    this.logindata.push(JSON.parse(localStorage.getItem('logData') || '[]'));
    console.log("logindata",this.logindata);
  }

}
