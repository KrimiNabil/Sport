import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { matchesData } from 'src/app/data/data';
import { MatchService } from 'src/app/services/match.service';


@Component({
  selector: 'app-match-info',
  templateUrl: './match-info.component.html',
  styleUrls: ['./match-info.component.css']
})
export class MatchInfoComponent implements OnInit {
match:any={};
matches:any=[];
id:any;
// you can also use id!:number; and ! is a way to say the the var is !null
  constructor( 
    private activatedRoute:ActivatedRoute,
    private matchService:MatchService 
    ) { }

  ngOnInit(): void {
    this.id= this.activatedRoute.snapshot.paramMap.get("id");
    // snapshot :it captuter the path 
    // paramMap :it maps the rooting moodel for the parametre
    // get :it get the object with that id
    // the id we give at the end is the  same we use in matchInfo/:id if we change the name we change the "id"
  //   this.matches=matchesData;
  //   for (let i = 0; i < this.matches.length; i++) {
  //     if (this.matches[i].id== this.id) {
  //       this.match=this.matches[i];
  //       break;
  //     };
      
  //   }
  this.matchService.getMatchById(this.id).subscribe((data)=>{
    console.log("Here is Data", data.match);
    // we gonna save the data we retreav from backend in this.match
    this.match = data.match
    // this.match is a instant we declar at the begining
  });

   }

}
