import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserhomeRoutingModule } from './userhome-routing.module';

import { UserlandinpageComponent } from './components/userlandinpage/userlandinpage.component';
 import { SharedModule } from '../shared/shared.module';
 import { UserprofileModule } from '../userprofile/userprofile.module';
import { UserorderModule } from '../userorder/userorder.module';




@NgModule({
  declarations: [
    UserlandinpageComponent,
    
  ],
  imports: [
    CommonModule,
    UserhomeRoutingModule,
    SharedModule,
    UserprofileModule,
    UserorderModule
  ]
})
export class UserhomeModule { }
