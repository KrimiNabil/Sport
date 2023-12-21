import { Component, Input,OnInit } from '@angular/core';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit {
@Input() articlInput:any;
  constructor() { }

  ngOnInit(): void {
    this.articlInput =[
      {id:"1",img:"",date:"18-10-2023",title:"article 1",par:"Description 1"},
    ]
  }

}
