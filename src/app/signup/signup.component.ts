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

  // get profile_image() {
  //   return this.u.get('profile_image');
  // }
  // base64textString = [];
  // onChange(event) {
  //   const file = event.target.files[0];
  //   if (file) {
  //     const reader = new FileReader();
  //     reader.onload = this.handleReaderLoaded.bind(this);
  //     reader.readAsBinaryString(file);
  //     console.log(this.base64textString);
  //   }
  
 }

