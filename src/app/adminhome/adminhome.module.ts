import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminhomeRoutingModule } from './adminhome-routing.module';
import { AdminLandingComponent } from './components/admin-landing/admin-landing.component';
import { SharedModule } from '../shared/shared.module';
import { AdminCategoryModule } from '../admin-category/admin-category.module';
import { AdminProductModule } from '../admin-product/admin-product.module';
import { AdminOrderModule } from '../admin-order/admin-order.module';

@NgModule({
  declarations: [
    AdminLandingComponent,
  ],
  imports: [
    CommonModule,
    AdminhomeRoutingModule,
    SharedModule,
    AdminCategoryModule,
    AdminProductModule,
    AdminOrderModule
  ]
})
export class AdminhomeModule { }
