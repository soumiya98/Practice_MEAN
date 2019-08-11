import { Component, OnInit } from '@angular/core';
import { stringify } from 'querystring';

@Component({
  selector: 'date',
  templateUrl: './date.component.html',
  styleUrls: ['./date.component.css']
})
export class DateComponent implements OnInit {
  // message:string=new Date().toDateString();  //date
 message:string;
  constructor() { 
 
  let currentdate=new Date();
// this.message=currentdate.toDateString() +"  "+ currentdate.toLocaleTimeString();
 setInterval(()=>{this.message=new Date().toLocaleTimeString()},1000)   //data binding
  }

  ngOnInit() {

  }

}
