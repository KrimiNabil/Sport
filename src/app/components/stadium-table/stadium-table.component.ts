import { Component, OnInit } from '@angular/core';
import { response } from 'express';
import { StadiumService } from 'src/app/services/stadium.service';

@Component({
  selector: 'app-stadium-table',
  templateUrl: './stadium-table.component.html',
  styleUrls: ['./stadium-table.component.css']
})
export class StadiumTableComponent implements OnInit {
  stadia:any=[];

  constructor(private stadiumService:StadiumService) { }

  ngOnInit(): void {
    this.stadiumService.getAllStadia().subscribe((response)=>{
      console.log("here response BE",response.stadiumsTab);
      this.stadia = response.stadiumsTab;
      
    })
  }

}
