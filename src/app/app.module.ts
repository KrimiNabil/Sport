import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { LoginComponent } from './components/login/login.component';
import { CupEventComponent } from './components/cup-event/cup-event.component';
import { ScoreComponent } from './components/score/score.component';
import { NewsComponent } from './components/news/news.component';
import { StatsComponent } from './components/stats/stats.component';
import { VideosComponent } from './components/videos/videos.component';
import { BlogComponent } from './components/blog/blog.component';
import { MatchesComponent } from './components/matches/matches.component';
import { SignupComponent } from './components/signup/signup.component';
import { HomeComponent } from './components/home/home.component';
import { AdminComponent } from './components/admin/admin.component';
import { AddMatchComponent } from './components/add-match/add-match.component';
import { AddPlayerComponent } from './components/add-player/add-player.component';
import { AddTeamComponent } from './components/add-team/add-team.component';
import { ArticlesComponent } from './components/articles/articles.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { MatchesTableComponent } from './components/matches-table/matches-table.component';
import { TeamsTableComponent } from './components/teams-table/teams-table.component';
import { MatchInfoComponent } from './components/match-info/match-info.component';
import { EditMatchComponent } from './components/edit-match/edit-match.component';
import { ReversePipe } from './pipes/reverse.pipe';
import { AstrixPipe } from './pipes/astrix.pipe';
import { PlayersComponent } from './components/players/players.component';
import { PlayerComponent } from './components/player/player.component';
import { HttpClientModule } from "@angular/common/http";
import { WeatherComponent } from './components/weather/weather.component';
import { PlayersTableComponent } from './components/players-table/players-table.component';
import { AddStadiumComponent } from './components/add-stadium/add-stadium.component';
import { StadiumTableComponent } from './components/stadium-table/stadium-table.component';
// it's resposible for importing http client

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    CupEventComponent,
    ScoreComponent,
    NewsComponent,
    StatsComponent,
    VideosComponent,
    BlogComponent, 
    MatchesComponent,
    SignupComponent,
    HomeComponent,
    AdminComponent,
    AddMatchComponent,
    AddPlayerComponent,
    AddTeamComponent,
    ArticlesComponent,
    MatchesTableComponent,
    TeamsTableComponent,
    MatchInfoComponent,
    EditMatchComponent,
    ReversePipe,
    AstrixPipe,
    PlayersComponent,
    PlayerComponent,
    WeatherComponent,
    PlayersTableComponent,
    AddStadiumComponent,
    StadiumTableComponent
  ],
  imports: [
    // responsible for the browser
    BrowserModule,
    // responsible for path and navigation
    AppRoutingModule,  

    FormsModule,
    
    ReactiveFormsModule,

     // responsible for resiving and sending data and only difiend in the app.module.ts
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
