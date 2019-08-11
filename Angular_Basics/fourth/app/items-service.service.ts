import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ItemsServiceService {
  private itemlist;
  constructor(private http:HttpClient) { }

  getItemDetails(){
    let obs=this.http.get("http://localhost:3000/items");
    
    return obs;
  }
}
