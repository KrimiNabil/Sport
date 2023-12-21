import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import jwt_decode from 'jwt-decode';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  user: any = {};
  errorMsg: any;
  constructor(private userService: UserService,
    private router: Router) { }

  ngOnInit(): void {
  }
  login() {
    
    this.userService.login(this.user).subscribe((data) => {
      console.log("Here msg after login", data.msg, data.token);
      if (data.token) {
        // save token into session storage
        sessionStorage.setItem("token", data.token);
        let user: any = this.decodeToken(data.token);
        console.log("here user", user);
        console.log("here token", data.token);
        if (user.role == "admin") {
          this.router.navigate(['dashboard']);
        } else {
          this.router.navigate(['']);
        }
      } else {
        // Display Error
        this.errorMsg = "Please Check Email/PWD"
      }

    });

  }
  decodeToken(token: string) {
    return jwt_decode(token);
  }

}

