import { Component, OnInit, Input } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Users } from '../../User';
import { HttpErrorResponse } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  users:Users;

  constructor(private userService:UserService, private router:Router) {   
  }
 
  ngOnInit() {
    this.userService.getAll().subscribe(
      user => this.users = user,
      (err: HttpErrorResponse) =>{
        if(err.error instanceof Error){
          console.log("Client-side Error");
        } else {
          console.log("Server-side Error");
        }
      } 
    );     
  }

   

  deleteUser(id:number){
    this.userService.deleteUser(id);
    this.userService.getAll().subscribe((res: any) => {
      this.users = res;  
    });
  } 

   updateUser(user){
    this.userService.getId(user.id);
    this.router.navigate(["updateuser"]);
   }

}
