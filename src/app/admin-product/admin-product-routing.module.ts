import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminProductHomeComponent } from './components/admin-product-home/admin-product-home.component';
import { AddProductComponent } from './components/add-product/add-product.component';
import { EditproductComponent } from './components/editproduct/editproduct.component';

const routes: Routes = [
  {path:'',component:AdminProductHomeComponent,
  children:[
    {path:'addprod',component:AddProductComponent},
    {path:'editprod',component:EditproductComponent},
  ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminProductRoutingModule { }
