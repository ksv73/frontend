import { Component, OnInit } from '@angular/core';
import { RouterService } from '../router.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  router: any;
  

  constructor(private routerservice:RouterService) { }

  ngOnInit() {
  }




  logOut() {
    // this.authenticationService.logout();
    localStorage.clear();
    this.routerservice.routeToLogin();
  }

}
