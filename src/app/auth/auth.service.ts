import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import{HttpClient} from '@angular/common/http'
import { BehaviorSubject, map, Observable } from 'rxjs';
import { Login } from './model/login';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseUrl = environment.apiUrl +'/register';
  private baseUrl1 = environment.apiUrl +'/login';

   private currentUserSubject: BehaviorSubject<Login>;
   public currentUser:Observable<Login>

  public UserDetails: any;

  constructor(private http:HttpClient) {
    this.currentUserSubject = new BehaviorSubject<Login>(JSON.parse(localStorage.getItem('currentUser')||'-'));
    this.currentUser = this.currentUserSubject.asObservable();
  }


  postRegister(data:any){
    return this.http.post(`${this.baseUrl}`,data)
  }
  postLogin(data:any){
    return this.http.post(`${this.baseUrl1}`,data).pipe(map((res:any)=>{

      if(res && res.result.token){
        this.UserDetails= res?.result.UserDetails;

        console.log('this.UserDetails',  this.UserDetails);

        localStorage.setItem('token',res.result?.token);
        localStorage.setItem('currentUser',JSON.stringify(res.result.UserDetails))

        let name = this.UserDetails?.userName
        this.currentUserSubject.next(this.UserDetails);
      }
      return res;
    }))
  }
}
