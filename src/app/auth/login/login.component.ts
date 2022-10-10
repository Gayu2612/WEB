import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { Login } from '../model/login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private authservice: AuthService,private router:Router) { }

  public login: Login = new Login();




  ngOnInit(): void {
  }


  postLogin() {
    console.log('kkkk');

    let details = {
      email: this.login.email,
      password: this.login.password
    }
    this.authservice.postLogin(details).subscribe((res: any) => {
      console.log('login', res);
      this.router.navigateByUrl('/dashboard')

    })
    // this.toastr.success('Sucessfully Login')

  }

}
