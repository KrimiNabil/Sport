import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
articles:any = [];
a:any ={};
  constructor() { }

  ngOnInit(): void {
    this.articles = [
      {id:"1",img:"",date:"18-10-3023",title:"article1",par:"Description 1"},
      {id:"2",img:"",date:"18-10-3023",title:"article2",par:"Description 2"},
      
      ]
  }

}
