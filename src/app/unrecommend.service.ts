import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Books } from './books';

@Injectable({
  providedIn: 'root'
})
export class UnrecommendService {

 
  constructor(private http:HttpClient) {}

  
  private userUrl = 'http://localhost:8089/apiRecommend/deleteRecommends';
  public unrecommend(id) {
    
    return this.http.delete(this.userUrl+'/'+id);
  }
}
