import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'; 
import { Users } from '../User';
import { Router } from '@angular/router';
import { Route } from '@angular/compiler/src/core';

@Injectable()
export class UserService {

  users: Users[];
  private route :Route;
  private  id:number;

  
  constructor(private _http: HttpClient ,private router:Router) { 
    
  } 

  public getAll(){
    return  this._http.get<Users>("http://localhost:3000/users");        
  }
  
  public getId(id){
    this.id=id;
    console.log(this.id);
  } 

  public getUSer(){
    this.getAll().subscribe((res: any) => {
      this.users = res;
    });
  }

  public addUser(name, lname,email){    
    const data =  this._http.post<Users>('http://localhost:3000/users',
    {
      name:name,
      lname:lname,
      email:email
    }).subscribe(res => {
      user => this.users = user;
      },
    );  
  }
 
  public deleteUser(id:number){
    if(confirm("Are you sure?")){
      const url = `${"http://localhost:3000/users"}/${id}`;
      this._http.delete(url).subscribe();

      this.getUSer();
      
    }  
  }

  

  public updateUserInfo(name, lname, email) {
    let id = this.id;
    console.log(id ,name, lname, email );//nermutsats user

    const url = `${"http://localhost:3000/users"}/${id}`;
     return this._http.put(url,{
      name:name,
      lname:lname,
      email:email
    }).subscribe();

    this.getUSer();
  }


  
  
  
}
