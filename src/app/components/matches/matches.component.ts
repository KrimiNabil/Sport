import { Component, OnInit } from '@angular/core';
import { matchesData } from 'src/app/data/data';
import { MatchService } from 'src/app/services/match.service';

@Component({
  selector: 'app-matches',
  templateUrl: './matches.component.html',
  styleUrls: ['./matches.component.css']
})
export class MatchesComponent implements OnInit {
//  declar matches as a new element of any type and any =[] is to declar that any is of type table
  matches:any=[];
// declar m as a new element of any type and any ={} is to declar that any is an element of a table [] 
  m:any={};
  constructor( private matchService:MatchService) { }
// ngOnInit is a function and void is the type of return it's found in all 
//  the .ts files ng mean angular OnInt meant on initialization 
// it work automaticly when we call the component

  ngOnInit(): void {
    this.matchService.getAllMatches().subscribe( 
      (data)=>{
        console.log("Here data from Be", data.matches);
        this.matches = data.matches;
      });
  // //this means the matches above in this component 
  //   this.matches=matchesData;
  }
  updateMatches(T:any){
    this.matches=T; 
  };

}
