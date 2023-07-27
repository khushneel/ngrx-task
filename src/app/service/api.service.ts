import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(private http : HttpClient) { }
  
  postSignUpData(sign:any){
    return this.http.post("http://10.8.10.102:3001/user/signup",sign);
   }

   getValue(){
    return this.http.get<any>("http://localhost:3000/posts");
  }
}
