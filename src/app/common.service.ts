import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { HttpClient, HttpResponse, HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  URL= "http://localhost:3000/restaurent";
  regURL="http://localhost:3000/users";
  urluser="http://localhost:3000";


  constructor(private _http:HttpClient) { }
  getRestoList(){
    return this._http.get(this.URL);
   }
 
   addResto(data:any){
     return this._http.post(this.URL, data);
   }
   deleteResto(id:any){
     return this._http.delete(`${this.URL}/${id}`)
   }
   getCurrentData(id:any){
     return this._http.get(`${this.URL}/${id}`)
   }
   updateResto(id:any,data:any){
     return this._http.put(`${this.URL}/${id}`,data)
   }
   createUser(data:any){
    return this._http.post(this.regURL, data);
  }
  loginUser(email: string, password: string){
    return this._http.post(this.regURL,{
      email: email,
      password: password
    });
  }
  // login(email: string, password: string): Observable<any> {
  //   return this._http.post(this.regURL, {
  //     email: email,
  //     password: password
  //   }, );
  // }

  // login(username: string, password: string): Observable<any> {
  //   const data = { username, password };
  //   return this._http.post(`${this.regURL}/login`, data);
  // }

  login(email: string, password: string): Observable<any> {
    return this._http.get(`${this.urluser}/users?email=${email}&password=${password}`);
  }


  getUser(){
    return this._http.get(this.regURL);
   }


  
   GetUserbyCode(id: string){

    return this._http.get(this.regURL+'/'+id);

  }
 isloggedin(){
    return sessionStorage.getItem('username')!=null;
  
  }
  getrole(){
    return sessionStorage.getItem('role')!=null?sessionStorage.getItem('role')?.toString():'';
  }

  gettoken(){  
    return !!localStorage.getItem("username");  
    } 
    private isAuthenticated1 = false;
    private userRoles: string[] = [];
  
    login1() {
      // Simulate a successful login
      this.isAuthenticated1 = true;
      this.userRoles = ['user']; // For demonstration purposes
    }
  
    logout() {
      // Simulate logout
      this.isAuthenticated1 = false;
      this.userRoles = [];
    }
  
    isAuthenticated() {
      return this.isAuthenticated1;
    }
  
    hasRoles(requiredRoles: string[]) {
      return requiredRoles.every(role => this.userRoles.includes(role));
    }
}

 


