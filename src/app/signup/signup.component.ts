import { Component, OnInit } from '@angular/core';
import { User } from 'src/user';
import { UserService } from '../user.service';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignUpComponent implements OnInit {
  ngOnInit(): void {
   
  }
 
  user: User = new User();
  constructor( private userService: UserService) {
  }
  createUser(): void {
    this.userService.createUser(this.user)
        .subscribe( data => {
          alert("User created successfully.");
        });
  };
  
 }

