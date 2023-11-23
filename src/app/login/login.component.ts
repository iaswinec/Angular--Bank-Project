import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';
import { FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  data="Your Perfect Banking Partner"  
  data1="Enter your account number" 

  constructor( private router:Router, private ds:DataService, private fb:FormBuilder){  


  }

  loginForm=this.fb.group({        //here uname is aacount number
    uname:['',[Validators.required, Validators.pattern('[0-9]+')]],  
    password:['',[Validators.required, Validators.pattern('[a-zA-Z0-9]+')]]
  })

  login(){   

    var uname=this.loginForm.value.uname
    var password=this.loginForm.value.password

    if(this.loginForm.valid){ 
          const result=this.ds.login(uname,password)
          if(result){
            alert("login successful")
            this.router.navigateByUrl("dashboard")
          }
          else{
            alert("login failed")
          }
        }
        else{
          alert("invalid form")
        }
  }

}
