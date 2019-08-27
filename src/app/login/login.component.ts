import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { User } from 'src/user';
import { Validators, FormControl } from '@angular/forms';
import { AuthenticationService } from '../authentication.service';
import { RouterService } from '../router.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private service:UserService,private authService: AuthenticationService,
    private routerService:RouterService) { }
 
  user: User = new User();
  ngOnInit() {
  }
  username:any
  password:any
 
  public bearerToken: any;
    public submitMessage: string;
  userlogin(): void {
// this.username=this.user.userName;
// this.password=this.user.userPassword;
  


localStorage.setItem('id',this.user.userName);

  console.log(this.user.userName,this.user.userPassword);
      // const user: any = { username: this.username.value, password: this.password.value };
      //  if (this.username.hasError('required') || this.password.hasError('required')) {
      //    this.submitMessage = 'Username and Password required';
      //  } else {
        
       // this.service.userlogin(this.user)
      this.authService.authenticateUser(this.user) 

        .subscribe( data => {
          alert("successfully Logged in.");
          this.bearerToken =data["token"];

          console.log(data);
          this.authService.setBearerToken(this.bearerToken);
          console.log(this.bearerToken);
         this.routerService.routeToDashboard();
          //this.router.navigate(['/Dashboard']);
         // console.log(" to dashboard");
        },
        err => {
          console.log("notfound");
                    if (err.status === 404) {
            this.submitMessage = err.message;
          } else {
            this.submitMessage = err.error.message;
          }
          } );
      
  // getUserDetails(){

  //   var iddata = "?username=" + this.loginForm.get('email').value + "&password=" + this.loginForm.get('password').value;

  // this.service.getUserDetails(iddata).subscribe(data => {
  //   this.service.setUserId(data['id'])

  // }
}
}
