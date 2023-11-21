import { Component } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

    constructor(private ds:DataService) {}

    uname:any
    acno:any
    pswd:any
  register(){
      const result=this.ds.register(this.uname,this.acno,this.pswd)
      if(result){   //result==true
        alert("registered successfully")
      }
      else{
        alert(this.acno+"account number already exists")
      }
  }
}
