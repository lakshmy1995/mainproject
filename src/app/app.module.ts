import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminhomeModule } from './adminhome/adminhome.module';
import { LandingpageModule } from './landingpage/landingpage.module';
import { UserhomeModule } from './userhome/userhome.module';
import { UserprofileModule } from './userprofile/userprofile.module';
import { SharedModule } from './shared/shared.module';
import { UserorderModule } from './userorder/userorder.module';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    AdminhomeModule,
    LandingpageModule,
    UserhomeModule,
    UserprofileModule,
    SharedModule,
    UserorderModule,
    HttpClientModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
