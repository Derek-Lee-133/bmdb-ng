import { Component, OnInit } from '@angular/core';
import {UserService} from '../../../service/user.service';
import {User} from '../../../model/user.class';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {title: string = 'Login';
msg: string = '';
user: User = new User();

constructor(private userSvc: UserService,
            private router: Router) { }

ngOnInit(): void {

}

login() {
  // call login service using username and password
  this.userSvc.login(this.user).subscribe(
    resp => {
      if (resp==null) {
        this.msg = "Invalid username / pwd combo.";
      }
      else {
        this.user = resp as User;
        console.log("Successful login!",this.user);
        this.router.navigateByUrl('/movie-list');
      }
    },
    err => {
      console.log("User login error!!!",err);
      this.msg = "Error during login"
    }
  );



}

}
