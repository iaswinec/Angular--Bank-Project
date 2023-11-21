import { Component } from '@angular/core';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  data="Your Perfect Banking Partner"   //ts to HTML data binding (string interpollation)
  data1="Enter your account number" //ts to HTML data binding (property binding)

  acno:any     //acno=""  OR  acno:any 
  pswrd:any
  userDetails:any={
    1000:{username:"anu", acno:1000, password:"1234", balance:0},
    1001:{username:"amal", acno:1001, password:"1234", balance:0},
    1002:{username:"arun", acno:1002, password:"1234", balance:0},
    1003:{username:"megha", acno:1003, password:"1234", balance:0}
  }

//create methods under Constructor & ngOnInit 

  login(){   //HTML to ts data binding (event binding)
    // alert("Signin worked ....!")
    var acnum=this.acno
    var userDetails=this.userDetails
    var pswd=this.pswrd
    if(acnum in userDetails){
        if(pswd==userDetails[acnum]["password"]){
            alert("Log in successful");
        }
        else{
          alert("password incorrect ");
          
        }
    }
    else{
      alert("incorrect account number");
      
    }
  }

  acnoChange(event:any){   //HTML to ts data binding ($event binding)
    console.log(event)
    console.log(event.target.value);
    this.acno=event.target.value
  }

  pswChange(event:any){
    console.log(event);
    console.log(event.target.value);
    this.pswrd=event.target.value
  }
}
