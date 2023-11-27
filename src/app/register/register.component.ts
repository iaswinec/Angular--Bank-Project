import { Component } from '@angular/core';
import { DataService } from '../services/data.service';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

    constructor(private ds:DataService, private router:Router, private fb:FormBuilder) {}

      registerForm=this.fb.group({
        uname:['',[Validators.required, Validators.pattern('[a-zA-Z]+')]],  
        acno:['',[Validators.required, Validators.pattern('[0-9]+')]],
        pswd:['',[Validators.required, Validators.pattern('[a-zA-Z0-9]+')]]
      })

  register(){   //
    var uname=this.registerForm.value.uname
    var acno=this.registerForm.value.acno
    var pswd=this.registerForm.value.pswd

    if(this.registerForm.valid){     
          this.ds.register(uname,acno,pswd).subscribe((result:any)=>{
            alert(result.message)
            this.router.navigateByUrl("")
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
