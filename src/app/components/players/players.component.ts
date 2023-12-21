import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.css']
})
export class PlayersComponent implements OnInit {

  playersTab:any=[
    {name:"Messi",position:"GK",age:36},
    {name:"Ali",position:"ATK",age:34},
    {name:"Salah",position:"DEF",age:29},
  ]
  // or 
// playersTab:any=[]
  constructor() { }

  ngOnInit(): void {
    // this.playersTab =[
    //   {name:"Messi",position:"GK",age:36},
    // {name:"Ali",position:"ATK",age:34},
    // {name:"Salah",position:"DEF",age:29},
    // ]
  }

}
