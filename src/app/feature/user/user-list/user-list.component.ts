import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/model/user.class';
import { SystemService } from 'src/app/service/system.service';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  title = "User List";
  users: User[] = [];
 
  constructor(private UserSvc:UserService,
               private sysSvc:SystemService) { }
 
   ngOnInit(): void {
     console.log ('User list - logged in User?', this.sysSvc.loggedInUser)
     // populate list of Users
     this.UserSvc.getAll().subscribe(
       resp => {
         this.users = resp as User[];
         console.log('Users,this.Users')
       },
       err =>{
         console.log(err);
       }
     );
 
   }

}
