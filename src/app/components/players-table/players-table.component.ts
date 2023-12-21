import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PlayerService } from 'src/app/services/player.service';

@Component({
  selector: 'app-players-table',
  templateUrl: './players-table.component.html',
  styleUrls: ['./players-table.component.css']
})
export class PlayersTableComponent implements OnInit {
  players: any = [];
  player: any = {};
  id: any;
  constructor(private router: Router,
    private playerService: PlayerService) { }

  ngOnInit(): void {
    this.playerService.getAllPlayers().subscribe(
      (response)=>{
        console.log("here to get all", response);
        this.players=response.players;
     });
  }
  goToDisplay(id: number) {
    this.router.navigate([`playerInfo/${id}`]);

  }

  goToEdit(id: number) {

    this.router.navigate([`editPlayer/${id}`]);
  }

  delete(id: number) {
    console.log(`here object number ${id} deleted`);
    this.playerService.deletePlayer(id).subscribe(
      (res) => {
        this.getAllPlayers();
      });

  }
  getAllPlayers() {
    this.playerService.getAllPlayers().subscribe(
      (response) => {
        console.log("here response from BE", response);
        this.players = response.players;
      }
    );

  }

}