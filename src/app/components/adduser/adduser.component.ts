import { Component, OnInit } from '@angular/core';
import { NgForm, FormGroup } from '@angular/forms';
import { UserService } from '../../services/user.service';
import { Users } from '../../User';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.css']
})
export class AdduserComponent implements OnInit {

  users:Users;
  
  constructor(
    private userService:UserService,
     private flashMessagesService:FlashMessagesService,
     public router:Router
    ) { }

  
  ngOnInit() {
    
  }


  addUserInfo(user){
    if(user.value.name.length != 0 || user.value.lname.length != 0 || user.value.email.length != 0){
      
      this.userService.addUser(user.value.name, user.value.lname, user.value.email);      
      this.flashMessagesService.show('New User has been added', { cssClass: 'alert-success', timeout: 2000 });
      this.router.navigate(["adduser"]);

    } else {
      this.flashMessagesService.show('Please fill all fields', { cssClass: 'alert-danger', timeout: 2000 });
    }
    this.userService.getAll().subscribe(
     user => this.users = user
   )
   
 }
}
