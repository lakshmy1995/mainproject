import { Component } from '@angular/core';
import { FormControl,FormGroup,Validator,Validators,RequiredValidator } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  loginForm!:FormGroup;

  ngOnInit(){
    this.loginForm= new FormGroup({
    email:new FormControl(null,[Validators.required,Validators.email]),
    password:new FormControl(null,[Validators.required])
    });
 
   }

   onSubmit()
   {
     console.log(this.loginForm);
   }

}
