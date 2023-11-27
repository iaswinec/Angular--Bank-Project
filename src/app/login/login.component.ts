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

  datedata:any  //to display date and time

  constructor( private router:Router, private ds:DataService, private fb:FormBuilder){  
    this.datedata=new Date()


  }

  loginForm=this.fb.group({        //here uname is aacount number
    uname:['',[Validators.required, Validators.pattern('[0-9]+')]],  
    password:['',[Validators.required, Validators.pattern('[a-zA-Z0-9]+')]]
  })

  login(){   

    var uname=this.loginForm.value.uname
    var password=this.loginForm.value.password

    if(this.loginForm.valid){ 
          this.ds.login(uname,password).subscribe((result:any)=>{
            localStorage.setItem("currentUser",result.currentUser)
            localStorage.setItem("currentAcno",JSON.stringify(result.currentAcno))
            localStorage.setItem("token", JSON.stringify(result.token))
            alert(result.message)
            this.router.navigateByUrl("dashboard")
          }, 
          result=>{
            alert(result.error.message)
          })
        }
        else{
          alert("invalid form")
        }
  }

}
