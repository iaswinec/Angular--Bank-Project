import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  userDetails:any={
    1000:{username:"anu", acno:1000, password:"1234", balance:0},
    1001:{username:"amal", acno:1001, password:"1234", balance:0},
    1002:{username:"arun", acno:1002, password:"1234", balance:0},
    1003:{username:"megha", acno:1003, password:"1234", balance:0}
  }
  
  register(uname:any, accno:any, psw:any){
    var userdetails=this.userDetails
    if(accno in userdetails ){
      return false
    }
    else{
      userdetails[accno]={username:uname, acno:accno, password:psw, balance:0}
      console.log(userdetails);
      
      return true
    }
  }
  
  constructor() { }
}
