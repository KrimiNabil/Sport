import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { matchesData } from 'src/app/data/data';
import { MatchService } from 'src/app/services/match.service';

@Component({
  selector: 'app-matches-table',
  templateUrl: './matches-table.component.html',
  styleUrls: ['./matches-table.component.css']
})
export class MatchesTableComponent implements OnInit {
match:any={};
matches:any=[];

  constructor(private router:Router, private matchService :MatchService) { }

  ngOnInit(): void {
    // this.matchService.getAllMatches().subscribe(
    //   (response:any)=>{
    //     console.log("Here response from BE",response);
    //     this.matches = response.matches;
    //   }
    // );

    this.getAllMatches();
    // this function execute the same code above
  }
  // the 2 function will be responsible for the routage 
  goToDisplay(id:number){
    this.router.navigate([ `matchInfo/${id}`]);
  }
  goToEdit(id:number){
    this.router.navigate([`edit-match/${id}`]);
 
  }
  delete(id:number){
    // this.router.navigate([`edit-match/${id}`])
    // alert(`here object number ${id} deleted`)
    // send a req to delete match from DB by id
    this.matchService.deleteMatch(id).subscribe((res)=>{
          // the same code that call all matches
      // this.matchService.getAllMatches().subscribe(
      //   (response:any)=>{
      //     console.log("Here response from BE",response.matches);
      //     this.matches = response.matches;
      //   }
      // );
      
      if (res.msg) {
        // if the delete is success return all matches 
        this.getAllMatches();
      } 
    });
  }
  getAllMatches(){
    this.matchService.getAllMatches().subscribe(
      (response:any)=>{
        console.log("Here response from BE",response);
        this.matches = response.matches;
      }
    );
  }
}


