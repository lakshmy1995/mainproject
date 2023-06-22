import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { NavbarComponent } from './components/navbar/navbar.component';
import { UsersidebarComponent } from './components/usersidebar/usersidebar.component';
import { AdminnavbarComponent } from './components/adminnavbar/adminnavbar.component';
import { AdminSearchProductComponent } from './components/admin-search-product/admin-search-product.component';


@NgModule({
  declarations: [
    NavbarComponent,
    UsersidebarComponent,
    AdminnavbarComponent,
    AdminSearchProductComponent
  ],
  imports: [
    CommonModule,
    SharedRoutingModule
  ],
  exports: [
    NavbarComponent,
    UsersidebarComponent,
    AdminSearchProductComponent,
    AdminnavbarComponent
  ],
})
export class SharedModule { 


}
