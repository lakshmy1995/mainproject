import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminProductRoutingModule } from './admin-product-routing.module';
import { DisplayProductComponent } from './components/display-product/display-product.component';
import { AddProductComponent } from './components/add-product/add-product.component';
import { AdminProductHomeComponent } from './components/admin-product-home/admin-product-home.component';
import { AdminProductCategoryComponent } from './components/admin-product-category/admin-product-category.component';
import { EditproductComponent } from './components/editproduct/editproduct.component';
import { MatDialogModule } from '@angular/material/dialog';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    DisplayProductComponent,
    AddProductComponent,
    AdminProductHomeComponent,
    AdminProductCategoryComponent,
    EditproductComponent
  ],
  imports: [
    CommonModule,
    AdminProductRoutingModule,
    MatDialogModule,
    ReactiveFormsModule
  ]
})
export class AdminProductModule { }
