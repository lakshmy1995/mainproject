import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
 { path:'landing',loadChildren:()=>import('./landingpage/landingpage.module').then(m=>m.LandingpageModule)},
 { path:'',redirectTo:'landing',pathMatch:'full'},
 {path:'auth',loadChildren:()=>import('./auth/auth.module').then(m=>m.AuthModule)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
