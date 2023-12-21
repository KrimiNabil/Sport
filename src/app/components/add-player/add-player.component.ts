import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { PlayerService } from 'src/app/services/player.service';
import { TeamService } from 'src/app/services/team.service';

@Component({
  selector: 'app-add-player',
  templateUrl: './add-player.component.html',
  styleUrls: ['./add-player.component.css']
})
export class AddPlayerComponent implements OnInit {
  addPlayerForm!: FormGroup;
  player: any = {};
  teams: any=[];
  teamId: any;
  constructor(private teamService: TeamService,
    private playerService: PlayerService,
    private router : Router) { }

  ngOnInit(): void {
    this.teamService.getAllTeams().subscribe((response)=>{
            console.log("here response from Be",response);
            this.teams=response.teams;
  })
  }
  addPlayer() {
    console.log("here add player", this.player);
    this.player.idTeam = this.teamId;
    this.playerService.addPlayer(this.player).subscribe((data)=>{
      console.log("Here data adding player",data.msg);
      this.player=data.msg;
      this.router.navigate(['/dashboard']);
      
    });

  }
  selectTeam(evt: any) {
    console.log("Here event", evt.target.value);
    this.teamId = evt.target.value;

  }

 }


//   // id form
//   addPlayerForm!:FormGroup;
//   constructor(private router:Router, private playerService: PlayerService,
//     private teamService:TeamService) { }

//   ngOnInit(): void {
//     this.teamService.getAllTeams().subscribe((response)=>{
//       console.log("here response from Be",response);
//       this.teams=response.teams;
//     })
//   }
//   addPlayer(){
//     console.log("here add player", this.player);
//       this.player.idTeam=this.teamId
//     this.playerService.addPlayer(this.player).subscribe((response)=>{
//       console.log("here response fromBE",response);
//       this.router.navigate(['/dashboard'])
      
//     })
//     }
//     selectTeam(evt:any) {
//     console.log("here event", evt.target.value);
//     this.teamId=evt.target.value
//     }
// }
