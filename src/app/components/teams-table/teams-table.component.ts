import { Component, OnInit } from '@angular/core';
import { TeamService } from 'src/app/services/team.service';

@Component({
  selector: 'app-teams-table',
  templateUrl: './teams-table.component.html',
  styleUrls: ['./teams-table.component.css']
})
export class TeamsTableComponent implements OnInit {
  teamsTab:any=[]
  teams:any;
  constructor(private teamService:TeamService) { }

  ngOnInit(): void {
    this.teamService.getAllTeams().subscribe(
      (data) => {
        this.teams = data.teams;
      }
    )
  }

}
