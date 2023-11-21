import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

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
  
  constructor(private router:Router, ) { }
  
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
  
  // 
  login(acno:any, psw:any){
    if(acno in this.userDetails){
      if(psw==this.userDetails[acno]["password"]){         
        this.router.navigateByUrl("dashboard")  
        return true
      }
      else{
        return false
        
      }
  }
  else{
    return false
    
  }
  }
// 


}
