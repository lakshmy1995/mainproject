import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from '../components/login/login.component';
import { SignupComponent } from '../components/signup/signup.component';
import { LogoutComponent } from '../components/logout/logout.component';


const auth: Routes = [
    {path:'login',component:LoginComponent},
    {path:'signup',component:SignupComponent},
    {path:'logout',component:LogoutComponent}
];

@NgModule({
  imports: [RouterModule.forChild(auth)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }