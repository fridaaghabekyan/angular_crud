import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule }   from '@angular/forms';
import { FlashMessagesModule } from 'angular2-flash-messages';


import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { UserService } from './services/user.service';
import { HttpClientModule } from '@angular/common/http';
import { AdduserComponent } from './components/adduser/adduser.component';
import { UpdateuserComponent } from './components/updateuser/updateuser.component'; 


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    DashboardComponent,
    AdduserComponent,
    UpdateuserComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FlashMessagesModule.forRoot(),
    FormsModule,
    RouterModule.forRoot([
      {path:"", component:DashboardComponent},
      {path:"adduser", component:AdduserComponent},
      {path:"updateuser", component:UpdateuserComponent}

    ])
  ],
  providers: [
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
