import { Component } from '@angular/core';
import { User } from './user.model';   //user module imported

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //title = 'second';
  user:User;        //pass this to child component 
  
 
  constructor(){
    this.user=new User();
    this.user.fname="Soumiya";
    this.user.lname="Rao";
    this.user.address="#2367,BSK 2nd stage";
    this.user.phone=["878767656","7878965654"];

  }       
}
