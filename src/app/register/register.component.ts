import { Component } from '@angular/core';
import { DataService } from '../services/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

    constructor(private ds:DataService, private router:Router) {}

    uname:any
    acno:any
    pswd:any
  register(){
      const result=this.ds.register(this.uname,this.acno,this.pswd)
      if(result){   //result==true
        alert("registered successfully")
        this.router.navigateByUrl("")
      }
      else{
        alert(this.acno+"account number already exists")
      }
  }
}
