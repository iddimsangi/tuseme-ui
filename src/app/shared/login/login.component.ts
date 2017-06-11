import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../core/auth.service";
import {Router} from "@angular/router";
import {SessionService} from "../../core/session.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  model: any = {
    "phone_number": '',
    "password": ''
  };
  loading = false;

  constructor(private authService: AuthService, private router: Router, private sessionService: SessionService
) { }

  login() {
    this.loading = true;
    this.authService.login(this.model)
      .then(res => {this.sessionService.setCurrentUser(res);
          this.sessionService.setCurrentUser(res);
            if(res.user.role === 2){
              this.router.navigateByUrl('/kiongozi/tuma');
            }
            else if (res.user.role === 1) {

              this.router.navigateByUrl('/mwananchi/taarifa');
            }
        },
        error => {
          console.error(error);
          this.loading = false;
        }
      );
  }
  ngOnInit() {

  }


}