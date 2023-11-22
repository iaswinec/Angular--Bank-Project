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
    const result=this.ds.login(this.acno,this.pswd)
    if(result){
      alert("login successful")
      this.router.navigateByUrl("dashboard")
    }
    else{
      alert("login failed")
    }
  }

}
