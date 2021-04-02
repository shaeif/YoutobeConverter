import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-url',
  templateUrl: './url.component.html',
  styleUrls: ['./url.component.css']
})
export class UrlComponent implements OnInit {
  
  url = ""

  retuenValue :any ;
  constructor(private http:HttpClient) { }

  ngOnInit(): void {
  
  }

   search() {
    
     this.retuenValue = this.http.get(this.url)
  }

}
