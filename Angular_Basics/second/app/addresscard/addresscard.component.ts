import { Component, OnInit, Input } from '@angular/core';
import { User } from '../user.model';


@Component({
  selector: 'addresscard',
  templateUrl: './addresscard.component.html',
  styleUrls: ['./addresscard.component.css']
})
export class AddresscardComponent implements OnInit {

 /* user:any;
  @Input("fname")  //to receive arguments(new name) from app component
  userfname:string;
  @Input("lname")  //to receive arguments(new name) from app component
  userlname:string;*/
  @Input("user")
  userObj:User;
isCollapse:boolean=true;
//entire value
 counter:number=0;
  constructor() { 
   
  }

  ngOnInit() {
    /*this.user={                                               //if placed inside constructor username is not displayed
      fname:this.userObj.fname,                                    //bcos of life cycle of component
      lname:this.userObj.lname,                                  //first class instantiation is done(constructor is called)-still properties is not populated
      address:this.userObj.address,        //then args population()
      phone:this.userObj.phone                             //so undefined will be set in userfname and userlname
    }; */
                                                          //life cycle:1.constructor 2.property population 3.ngOnInit
  
  }
toggleCollapse(){
  this.isCollapse=!this.isCollapse;
}
count(){
  this.counter+=1;
}
}
