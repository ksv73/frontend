import { Component, OnInit } from '@angular/core';
import { User } from 'src/user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-updateprofile',
  templateUrl: './updateprofile.component.html',
  styleUrls: ['./updateprofile.component.css']
})
export class UpdateprofileComponent implements OnInit {
id:any;
  constructor(private userService: UserService) { }
  user: User = new User();
  ngOnInit() {
  }
  updateUser(): void {
   this.id= localStorage.getItem('id');

    this.userService.updateUser(this.user,this.id)
        .subscribe( data => {
          alert("User profile updated successfully.");
        });
        
  };

}
