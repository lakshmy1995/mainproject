import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserorderRoutingModule } from './userorder-routing.module';
import { MyorderComponent } from './components/myorder/myorder.component';
import { PlaceorderComponent } from './components/placeorder/placeorder.component';
import { ShippingComponent } from './components/shipping/shipping.component';
import { OrderhistoryComponent } from './components/orderhistory/orderhistory.component';


@NgModule({
  declarations: [
    MyorderComponent,
    PlaceorderComponent,
    ShippingComponent,
    OrderhistoryComponent
  ],
  imports: [
    CommonModule,
    UserorderRoutingModule
  ]
})
export class UserorderModule { }
