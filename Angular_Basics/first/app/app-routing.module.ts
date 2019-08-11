import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SettingsComponent } from './settings/settings.component';
import { ResourceNotFoundComponent } from './resource-not-found/resource-not-found.component';
import { ProfileComponent } from './profile/profile.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  {path:"",redirectTo:"/home",pathMatch:"full"},
  {path:"home",component:HomeComponent},
  {path:"settings",component:SettingsComponent,children:[
    {path:"profile",component:ProfileComponent},
    {path:"contacts",component:ContactComponent}
  ]},
  {path:"**",component:ResourceNotFoundComponent},  //other than any url

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
