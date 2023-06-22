import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminOrderRoutingModule } from './admin-order-routing.module';
import { OrderHomeComponent } from './components/order-home/order-home.component';
import { UserOrdersComponent } from './components/user-orders/user-orders.component';
import { UserDetailsComponent } from './components/user-details/user-details.component';


@NgModule({
  declarations: [
    OrderHomeComponent,
    UserOrdersComponent,
    UserDetailsComponent
  ],
  imports: [
    CommonModule,
    AdminOrderRoutingModule
  ]
})
export class AdminOrderModule { }
