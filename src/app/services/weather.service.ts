import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
weatherURL:string ="http://localhost:3000/weather";
  constructor( private httpClient:HttpClient) { }
  searchWeather(city:any){
    return this.httpClient.post<{resp : any}>(this.weatherURL,city);
  }
}
