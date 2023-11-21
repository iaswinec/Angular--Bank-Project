import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';
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
  constructor( private router:Router, private ds:DataService){  //Dependency injection 
// access specifier reference:Method 

  }

  login(){   
    var acnum=this.acno
    var pswd=this.pswd
    var userDetails=this.ds.userDetails
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
