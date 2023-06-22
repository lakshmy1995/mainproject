import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserprofileRoutingModule } from './userprofile-routing.module';
import { DisplayprofileComponent } from './components/displayprofile/displayprofile.component';
import { EditprofileComponent } from './components/editprofile/editprofile.component';
import { ProfilelandingComponent } from './components/profilelanding/profilelanding.component';


@NgModule({
  declarations: [
    DisplayprofileComponent,
    EditprofileComponent,
    ProfilelandingComponent
  ],
  imports: [
    CommonModule,
    UserprofileRoutingModule
  ],

  exports: [
  DisplayprofileComponent,
  EditprofileComponent,
    
  ],
})
export class UserprofileModule { }
