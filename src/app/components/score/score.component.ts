import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatchService } from 'src/app/services/match.service';


@Component({
  selector: 'app-score',
  templateUrl: './score.component.html',
  styleUrls: ['./score.component.css']
})
export class ScoreComponent implements OnInit {
  // @Input is a notetion that allaw the passage of data 
  // in other word if we have a component that's gonna be used in other plases we assin @Input to it .ts file
  // and every time we gonna use it we use <app-name [matchInput="i"]></app-name>
  // i is the data that will be used
  @Input() matchInput: any;
  @Output() newMatches: EventEmitter<any> = new EventEmitter;


  constructor(private matchService: MatchService) { }

  ngOnInit(): void {
  }
  scoreColor(a: number, b: number) {
    if (a > b) {
      return "green";
    } else if (a < b) {
      return "red";
    } else {
      return "blue";
    }
  }

  scoreResult(a: number, b: number) {
    if (a > b) {
      return "(Win)";
    } else if (a < b) {
      return "(Lose)";
    } else {
      return "(Draw)";
    }
  }
  resultCompare(a: number, b: number) {
    let T = [];
    if (a > b) {
      T = [" Win", "Grean"];
    } else if (a < b) {
      T = [" Loss", "Red"];
    } else {
      T = [" Draw", "Blue"];
    }
    return T;
  }
  deleteMatch(id:any) {
    this.matchService.deleteMatch(id).subscribe((result) => {
      console.log("Here result from BE", result.msg);
      this.matchService.getAllMatches().subscribe((data) => {
        console.log("Here data from BE", data.matches);
        this.newMatches.emit(data.matches);
      });
    });
  };
}

