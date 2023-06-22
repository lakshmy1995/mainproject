import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingHomeComponent } from './components/landing-home/landing-home.component';
import { SpecialofferComponent } from './components/specialoffer/specialoffer.component';

const landing: Routes = [
    {path:'',component:LandingHomeComponent},
    {path:'home',component:LandingHomeComponent}
   
];

@NgModule({
  imports: [RouterModule.forChild(landing)],
  exports: [RouterModule]
})
export class LandingPageRoutingModule { }