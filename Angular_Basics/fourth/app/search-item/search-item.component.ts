import { Component, OnInit } from '@angular/core';
import { SearchitemService } from '../searchitem.service';
import {NgForm} from '@angular/forms'
@Component({
  selector: 'app-search-item',
  templateUrl: './search-item.component.html',
  styleUrls: ['./search-item.component.css']
})
export class SearchItemComponent implements OnInit {
  
  itemob:any;
  constructor(private search:SearchitemService) { }
  ngOnInit() {

  }
  
 
   getitem(data1:NgForm){
   let obs=this.search.getItemDetails(data1.controls['id'].value);
   obs.subscribe((response)=>{
     this.itemob=response;
     console.log(this.itemob)
     
   })

   }
}
