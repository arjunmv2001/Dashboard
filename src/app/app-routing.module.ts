import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { GalleryComponent } from './gallery/gallery.component';
import { EmployeeComponent } from './employee/employee.component';
import { AddemployeeComponent } from './addemployee/addemployee.component';
import { LeadsComponent } from './leads/leads.component';
import { MainContentComponent } from './main-content/main-content.component';


const routes: Routes = [
  {
    path:'',component:MainContentComponent
  },
  {
    path:'gallery', component:GalleryComponent
  },
  {
    path:'employees', component:EmployeeComponent
  },
  {
    path:'addemployee', component:AddemployeeComponent
  },
  {
    path:'leads', component:LeadsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
