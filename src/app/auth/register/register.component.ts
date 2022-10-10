import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { Login } from '../model/login';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  public login:Login =new Login();
  constructor(private authservice:AuthService,private router:Router) { }

  ngOnInit(): void {
  }
  register(){
    console.log('ooooo');

     this.authservice.postRegister(this.login).subscribe((res:any)=>{
           console.log('register',res);
           this.router.navigateByUrl('/auth/login')
     })
    //  this.toastr.success('Sucessfully')

  }

}
