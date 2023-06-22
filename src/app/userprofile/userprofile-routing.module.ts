import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditprofileComponent } from './components/editprofile/editprofile.component';
import { ProfilelandingComponent } from './components/profilelanding/profilelanding.component';

const routes: Routes = [
  { path: '', component: ProfilelandingComponent },
  { path: 'editprofile', component: EditprofileComponent },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserprofileRoutingModule { }
