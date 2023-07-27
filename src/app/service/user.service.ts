import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http: HttpClient) {}

  signUp(user: any): Observable<any> {
    // const url = 'http://10.8.10.102:3001/user/signup'; 

    const url ='http://localhost:3000/posts';
    return this.http.post(url, user);
  }

  getValue():Observable<any>{
    return this.http.get("http://localhost:3000/posts");
  }
}
