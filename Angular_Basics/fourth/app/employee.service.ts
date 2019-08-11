import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  getEmp(){
    return[
      {"id":"01","name":"AA","dept":"Sales"},
    {"id":"02","name":"BB","dept":"HR"},
    {"id":"03","name":"CC","dept":"Retail"},
    {"id":"04","name":"DD","dept":"Biometric"}

    ]
  }
}
