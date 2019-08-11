import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddresscardComponent } from './addresscard/addresscard.component';
import {ChildComponent} from './addresscard/child/child.component';
 
@NgModule({
  declarations: [
    AppComponent,
    AddresscardComponent,
    ChildComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
