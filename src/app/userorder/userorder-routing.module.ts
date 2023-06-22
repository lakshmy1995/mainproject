import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyorderComponent } from './components/myorder/myorder.component';
import { OrderhistoryComponent } from './components/orderhistory/orderhistory.component';

const routes: Routes = [
  {path:'myorder',component:MyorderComponent},
  {path:'orderhistory', component:OrderhistoryComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserorderRoutingModule { }
