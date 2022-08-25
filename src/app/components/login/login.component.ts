import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import {UserService} from "../../services/user.service";
import {UserAuthService} from "../../services/user-auth.service";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(
    private userService: UserService,
    private userAuthService: UserAuthService,
    private router: Router
  ) {}

  fullname : string;
  password : string;

  ngOnInit(): void {}

  login() {
    this.userService.login({userName : this.fullname, userPassword : this.password})
      .subscribe(
        {
      next : (response: any) => {
        this.userAuthService.setRoles(response.user.role);
        this.userAuthService.setToken(response.jwtToken);

        const role = response.user.role[0].roleName;
        if (role === 'Admin') {
          this.router.navigate(['/admin']);
        }
        else if (role === 'User'){
          this.router.navigate(['/home']);
        }
        else  this.router.navigate(['/merchant']);
      },
      error: (error) => { console.log(error);  },
      complete:   () => console.info('complete')
      });
  }
}
