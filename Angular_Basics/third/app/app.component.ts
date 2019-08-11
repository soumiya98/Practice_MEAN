import { Component } from '@angular/core';
import {NgForm} from '@angular/forms'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  title = 'third';
  status:number;
  check(data:NgForm){
       this.status=  (data.controls['no1'].value + data.controls['no2'].value)
       console.log(this.status)
  }
  
  

}
