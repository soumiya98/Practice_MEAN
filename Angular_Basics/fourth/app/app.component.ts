import { Component } from '@angular/core';
import { ItemsServiceService } from './items-service.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'fourth';
  constructor(private itemService:ItemsServiceService){
    

  }
  items:any;
  ngOnInit() {
    // this.empService=new this.EmployeeService();
     let obs=this.itemService.getItemDetails();
     obs.subscribe((response)=>{
        console.log(response);
         this.items= response;
        
    });
   }
 
  
}
