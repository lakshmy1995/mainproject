import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { userRegistration } from '../model/signup';
import { environment } from 'src/environments/environment.development';
@Injectable({
  providedIn: 'root'
})
export class SignupService {
  

   
   constructor(private http: HttpClient) {}
   private apiUrl =  environment.apiUrl;
 

  userSignup(data: userRegistration): Observable<any> {
    return this.http.post(`${this.apiUrl}/api/User/userRegistration`,data);
  }
  
}
