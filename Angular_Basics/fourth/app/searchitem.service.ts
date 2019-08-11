import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SearchitemService {

  constructor(private http:HttpClient) { }

  getItemDetails(id){
    return this.http.get("http://127.0.0.1:3000/items/"+id);
  }
}
