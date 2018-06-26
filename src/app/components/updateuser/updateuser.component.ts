import { Component, OnInit } from '@angular/core';
import { NgForm, FormGroup } from '@angular/forms';
import { UserService } from '../../services/user.service';
import { Users } from '../../User';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router } from '@angular/router';

@Component({
  selector: 'app-updateuser',
  templateUrl: './updateuser.component.html',
  styleUrls: ['./updateuser.component.css']
})
export class UpdateuserComponent implements OnInit {

  constructor(private userService:UserService) { }

  ngOnInit() {
  }

  

  public updateUserInfo(user){
    this.userService.updateUserInfo(user.name, user.lname, user.email);
  }
  
}
