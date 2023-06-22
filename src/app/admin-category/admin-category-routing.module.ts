import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCategoryComponent } from './components/add-category/add-category.component';
import { CategoryLandingComponent } from './components/category-landing/category-landing.component';

const routes: Routes = [
  {path:'',component:CategoryLandingComponent,
  children:[
    {path:'addcategory',component:AddCategoryComponent}
  ]},
  // { path:'',redirectTo:'admincategory',pathMatch:'full'},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminCategoryRoutingModule { }
