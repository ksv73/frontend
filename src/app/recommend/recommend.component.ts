import { Component, OnInit } from '@angular/core';
import { Books } from '../books';
import { HttpClient } from '@angular/common/http';
import { RecommendService } from '../recommend.service';
import { UnrecommendService } from '../unrecommend.service';

@Component({
  selector: 'app-recommend',
  templateUrl: './recommend.component.html',
  styleUrls: ['./recommend.component.css']
})
export class RecommendComponent implements OnInit {
  result: any;
  books: Books = new Books();

  constructor(private httpClient:HttpClient,private unrecommendService:UnrecommendService) {
   }
  id= localStorage.getItem('id');

   ngOnInit() {
    // this.reloadData();

    this.httpClient.get('http://localhost:8089/apiRecommend/displayRecommend'+'/'+this.id).subscribe(data=>{
      // this.country=data as object[];
      this.result = data;
     console.log(this.result);
     })
  }

    unrecommend(id){
      
      this.unrecommendService.unrecommend(id).subscribe(data => {
        alert("recommendation deleted successfully");
      console.log(data);
      })
     }

  
  
 

 
   }