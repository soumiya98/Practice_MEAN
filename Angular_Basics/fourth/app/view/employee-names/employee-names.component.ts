import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/employee.service';

@Component({
  selector: 'app-employee-names',
  templateUrl: './employee-names.component.html',
  styleUrls: ['./employee-names.component.css']
})
export class EmployeeNamesComponent implements OnInit {
employees;
  constructor(private empSer:EmployeeService) { }

  ngOnInit() {
    this.employees=this.empSer.getEmp();
  }

}
