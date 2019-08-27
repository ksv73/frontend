import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Books } from './books';

@Injectable({
  providedIn: 'root'
})
export class RecommendService {
  addbooks(books: Books) {
    throw new Error("Method not implemented.");
  }
  constructor(private http:HttpClient) {}
  private userUrl = 'http://localhost:8089/apiRecommend/addtoRecommend';
  public recommend(books: Books) {
    return this.http.post<Books>(this.userUrl, books);
  }

  getall(bsearch:string)
 {
   return this.http.get('http://openlibrary.org/search.json?q='+ bsearch + '');
 }

}
