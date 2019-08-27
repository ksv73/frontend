import { Component, OnInit } from '@angular/core';
import { Books } from '../books';
import { HttpClient } from '@angular/common/http';
import { RecommendService } from '../recommend.service';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.css']
})
export class SearchbarComponent implements OnInit {
  constructor(private httpClient:HttpClient, private searchservice: RecommendService) {
  }
  books:Books=new Books();

  
  ngOnInit() {
  }

  searchForm = new FormGroup ({
    searchbox: new FormControl('')
  })
  q:any;
  res: object[];
  search(){
    this.q = this.searchForm.get("searchbox").value;
    this.searchservice.getall(this.q).subscribe(data => {
      //console.log(data);
      this.res=data["docs"];
     // console.log(this.res)
    })
  }
  
}
 
  
 
 

//  //storing
//  toFav(data){
//    this.books.name = data["name"];
//    this.books.url = data["url"];
//    console.log(this.books);
//    this.searchservice.getall(this.books).subscribe(data => {
//    console.log(data);
//    }

 

