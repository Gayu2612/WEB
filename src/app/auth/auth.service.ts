import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import{HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseUrl = environment.apiUrl +'/register';
  private baseUrl1 = environment.apiUrl +'/login';

  constructor(private http:HttpClient) { }


  postRegister(data:any){
    return this.http.post(`${this.baseUrl}`,data)
  }
  postLogin(data:any){
    return this.http.post(`${this.baseUrl1}`,data)
  }
}
