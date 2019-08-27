import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../user';
const httpOptions={
  headers:new HttpHeaders({
    "Accept":"/"
  })
 };
@Injectable()
export class UserService {
 constructor(private http:HttpClient) {}
 private userUrl1 = 'http://localhost:8089/apiBook/addUser';
 private userUrl2 = 'http://localhost:8089/apiBook/login';
 private userUrl3 = 'http://localhost:8089/apiBook/updateUser';
//  private userUrl4 = 'http://localhost:8089/apiBook/updateBook';

   
   
//  public getUsers() {
//    return this.http.get<User[]>(this.userUrl);
//  }
//  public deleteUser(user) {
//    return this.http.delete(this.userUrl + "/"+ user.id);
//  }
public createUser(user :User) {
  return this.http.post<User>(this.userUrl1, user);
}

//  public userlogin(user :User) {
//    return this.http.get<User>('this.userUrl2',user);
//    . }

 public updateUser(user :User,id) {
  return this.http.put<User>(this.userUrl3+'/'+id, user);
}

 
//  getUserDetails(data) {
//   return this.http.get('http://localhost:8089/displayUserById' + data);
// }

// setUserId(id: string) {
//   localStorage.setItem('id', id);
// }


 
}