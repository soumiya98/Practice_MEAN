import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeNamesComponent } from './employee-names/employee-names.component';

@NgModule({
  declarations: [EmployeeNamesComponent],
  imports: [
    CommonModule
  ],
  exports:[EmployeeNamesComponent]
})
export class ViewModule { }
