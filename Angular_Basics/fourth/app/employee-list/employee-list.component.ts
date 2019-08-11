import { Component, OnInit } from '@angular/core';

import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
   
  employees;
  ;
  constructor(private empService:EmployeeService) { }

  ngOnInit() {
   // this.empService=new this.EmployeeService();
    this.employees=this.empService.getEmp();
  }

}
