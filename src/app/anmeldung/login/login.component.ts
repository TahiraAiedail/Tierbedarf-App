import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  
  message = 'status N/A';
  //email: string = '';
  //password: string = '';

  constructor(public authService: AuthService, public router: Router) {

  }

  ngOnInit() {
    if(this.authService.isLoggedIn) {
      this.message = 'status: logged in'
    }
  }

  login() {
    this.authService.login().subscribe((res) => {
      if(this.authService.isLoggedIn) {
        const redirect = this.authService.redirectUrl ? this.router.parseUrl(this.authService.redirectUrl) : 'login';
        this.message = 'status: logged in'
       // console.log('email: ' + this.email);
        //console.log('password: ' + this.password);
        this.router.navigateByUrl(redirect);
      }
    })
    
  }

  logout() {
    this.authService.logout();
    this.message = 'status: logged out'
  }

}
