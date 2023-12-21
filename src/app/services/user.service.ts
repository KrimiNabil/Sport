import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
userUrl:string="http://localhost:3000/users"
  constructor(private httpClient:HttpClient) { }
  login(user:any){
      return this.httpClient.post<{msg:string,
        token:string}>(this.userUrl + "/login",user);
  }
  signup(userObj:any, img:File){
    let formData = new FormData; 
    formData.append("firstName", userObj.fristName);
    formData.append("lastName", userObj.lastName);
    formData.append("email", userObj.email);
    formData.append("pwd", userObj.pwd);
    formData.append("role", userObj.role);
    formData.append("img", img);
    return this.httpClient.post<{msg:string}>(this.userUrl +"/subscription",formData);
  }
  editProfile(user:any){
    return this.httpClient.put(this.userUrl,user);
  }


}
