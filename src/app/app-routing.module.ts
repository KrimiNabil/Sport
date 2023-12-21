import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { HomeComponent } from './components/home/home.component';
import { MatchesComponent } from './components/matches/matches.component';
import { AdminComponent } from './components/admin/admin.component';
import { AddMatchComponent } from './components/add-match/add-match.component';
import { AddPlayerComponent } from './components/add-player/add-player.component';
import { AddTeamComponent } from './components/add-team/add-team.component';
import { MatchInfoComponent } from './components/match-info/match-info.component';
import { EditMatchComponent } from './components/edit-match/edit-match.component';
import { PlayersComponent } from './components/players/players.component';
import { WeatherComponent } from './components/weather/weather.component';
import { AddStadiumComponent } from './components/add-stadium/add-stadium.component';

const routes: Routes = [
  // http://localhost:4200/
  {path:"", component:HomeComponent},
// http://localhost:4200/login ==> the login component will be assined to /login 
  {path:"login", component:LoginComponent},
// http://localhost:4200/==> the signup component will be assined to /subscription 
  {path:"subscription", component:SignupComponent},
  // http://localhost:4200/==> the matches component will be assined to /matches 
  {path:"signupAdmin", component:SignupComponent},
  {path:"matches", component:MatchesComponent},
  {path:"dashboard", component:AdminComponent},
  {path:"addMatch", component:AddMatchComponent},
  {path:"addPlayer", component:AddPlayerComponent},
  {path:"addTeam", component:AddTeamComponent},
  // in order to make the website dinamic we used the id of the product or object
  // /:id is the id of the product or object that we ganna us and it's going to be showen in the URL :id is a key
  {path:"matchInfo/:id",component:MatchInfoComponent},
  {path:"edit-match/:id",component:EditMatchComponent},
  {path:"players",component:PlayersComponent},
  {path:"searchWeather",component:WeatherComponent},
  {path:"addStadium",component:AddStadiumComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
