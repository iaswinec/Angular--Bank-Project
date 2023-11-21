import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  data="Your Perfect Banking Partner"  
  data1="Enter your account number" 

  acno:any
  pswd:any
  userDetails:any={
    1000:{username:"anu", acno:1000, password:"1234", balance:0},
    1001:{username:"amal", acno:1001, password:"1234", balance:0},
    1002:{username:"arun", acno:1002, password:"1234", balance:0},
    1003:{username:"megha", acno:1003, password:"1234", balance:0}
  }

  constructor( private router:Router){  //Dependency injection 
// access specifier reference:Method

  }

  login(){   
    var acnum=this.acno
    var pswd=this.pswd
    var userDetails=this.userDetails
    if(acnum in userDetails){
        if(pswd==userDetails[acnum]["password"]){
            alert("Log in successful");
          this.router.navigateByUrl("dashboard")      //dashboard is the path of destination page
        }
        else{
          alert("password incorrect ");
          
        }
    }
    else{
      alert("incorrect account number");
      
    }
  }

  // acnoChange(event:any){   //HTML to ts data binding ($event binding)
  //   console.log(event)
  //   console.log(event.target.value);
  //   this.acno=event.target.value
  // }

  // pswChange(event:any){
  //   console.log(event);
  //   console.log(event.target.value);
  //   this.pswrd=event.target.value
  // }
}
