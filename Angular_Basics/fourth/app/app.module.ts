import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import  {FormsModule} from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { ViewModule } from './view/view.module';
import { EmployeeService } from './employee.service';
import { ItemsServiceService } from './items-service.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { SearchItemComponent } from './search-item/search-item.component';


@NgModule({
  declarations: [
    AppComponent,
    EmployeeListComponent,
    SearchItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ViewModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [EmployeeService,ItemsServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
