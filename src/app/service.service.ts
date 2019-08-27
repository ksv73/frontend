import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http';
import{Observable} from 'rxjs';


import { Books } from './books';
import { RouterService } from './router.service';
@Injectable()
export class ServiceService {
 private popularBookUrl='https://openlibrary.org/api/books?bibkeys=ISBN:0451526538';
 constructor(private http : HttpClient,private routerService:RouterService) { }
 
 getForthcomingBook() : Observable<Books[]>
 {
   return this.http.get<Books[]>('this.popularBookUrl')
 }
}