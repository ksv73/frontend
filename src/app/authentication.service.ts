// import { Injectable, Output } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { map } from 'rxjs/operators';
// //import { EventEmitter } from '@angular/core/src/event_emitter';

// @Injectable()
// export class AuthenticationService {
//     constructor(private http: HttpClient) { }
//     //@Output() loggedOut = new EventEmitter<void>();

//     login(username: string, password: string) {
//         return this.http.post<any>('http://localhost:9090/api/v1/auth/login', { username: username, password: password })
//             .pipe(map(user => {                
//                 // login successful if there's a jwt token in the response
//                 if (user) {
//                     // store user details and jwt token in local storage to keep user logged in between page refreshes
//                     localStorage.setItem('currentUser', JSON.stringify(user));
//                     localStorage.setItem('userId', user.userId);
//                 }
//                 return user;
//             }));
//     }

//     logout() {
//         // remove user from local storage to log user out        
//         localStorage.removeItem('currentUser');
//         //this.loggedOut.emit();
//     }
// }



import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';

@Injectable()
export class AuthenticationService {
  constructor(private httpClient: HttpClient) {
  }

  authenticateUser(data) {
    return this.httpClient.post('http://localhost:8089/apiBook/login', data);
  }
  setBearerToken(token) {
    localStorage.setItem('bearerToken', token);
  }
  getBearerToken() {
    return localStorage.getItem('bearerToken');
  }


 

  }
