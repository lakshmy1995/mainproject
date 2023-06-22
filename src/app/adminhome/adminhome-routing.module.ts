import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminLandingComponent } from './components/admin-landing/admin-landing.component';

const routes: Routes = [
  
  {path:'adminLanding', component:AdminLandingComponent,
    children:[
      { path: '', redirectTo: 'product', pathMatch: 'full' },
      { path: 'product',loadChildren:()=>import('../admin-product/admin-product.module').then(m=>m.AdminProductModule) },
      { path: 'category',loadChildren:()=>import('../admin-category/admin-category.module').then(m=>m.AdminCategoryModule) },
      { path: 'order',loadChildren:()=>import('../admin-order/admin-order.module').then(m=>m.AdminOrderModule) },
    ]
  },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminhomeRoutingModule { }
