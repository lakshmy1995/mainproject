import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserlandinpageComponent } from './components/userlandinpage/userlandinpage.component';

const routes: Routes = [
  {path:'userlanding',component:UserlandinpageComponent,
    children: [
      { path: '', redirectTo: 'userprofile', pathMatch: 'full' },
      {path:'userprofile',loadChildren:()=>import('../userprofile/userprofile.module').then(m=>m.UserprofileModule)},  
      {path:'userorder',loadChildren:()=>import('../userorder/userorder.module').then(m=>m.UserorderModule)},  
    ],
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserhomeRoutingModule { }
