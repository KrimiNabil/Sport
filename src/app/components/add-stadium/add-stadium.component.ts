import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { StadiumService } from 'src/app/services/stadium.service';

@Component({
  selector: 'app-add-stadium',
  templateUrl: './add-stadium.component.html',
  styleUrls: ['./add-stadium.component.css']
})
export class AddStadiumComponent implements OnInit {
  stadiumForm!  : FormGroup;
  stadium : any ={};
  constructor(private stadumService:StadiumService) { }

  ngOnInit(): void {
  }
 addStadium(){
 console.log("Here stadium object",this.stadium);
 this.stadumService.addStadium(this.stadium).subscribe((response)=>{
  console.log("here response from bl",response.msg);
  


  });
 };
}
