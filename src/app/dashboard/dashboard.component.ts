import { Component, OnInit } from '@angular/core';
import { ServiceService }  from '../service.service';

import { HttpClient } from '@angular/common/http';
import { RecommendComponent } from '../recommend/recommend.component';
import { RecommendService } from '../recommend.service';
import { Books } from '../books';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  result: any;
  books: Books = new Books();
  constructor(private httpClient:HttpClient,private recommendService: RecommendService) {
   }

  forthComingBook : Books[];
  ngOnInit() {
    this.httpClient.get('http://openlibrary.org/people/george08/lists.json').subscribe(data=>{

      // this.country=data as object[];
      this.result = data['entries'] as object[];
     console.log(this.result);
     localStorage.getItem('id');
     console.log(localStorage.getItem('id'));

    
    })
  
  
  }
  recommend(data){
    this.books.name = data["name"];
    this.books.url = data["url"];
    console.log(this.books);
    this.recommendService.recommend(this.books).subscribe(data => {
      alert("recommendation added successfully");
    console.log(data);
    })
   }
    

   setColor(btn, color){
    var count=1;
    var property = document.getElementById(btn);
    if (count == 0){
        property.style.backgroundColor = "#FFFFFF"
        count=1;
    }
    else{
        property.style.backgroundColor ="#0000ff"
        count=0;
    }


  }
  }




