import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit {

  username:any
  acno:any  //

  constructor(private ds: DataService, private fb:FormBuilder, private router:Router){
    // this.username=this.ds.currentUser
    this.username=localStorage.getItem("currentUser")
  }

  ngOnInit(): void{
    if(!localStorage.getItem("currentAcno")){
        alert("please login")
        this.router.navigateByUrl("")
    }
  }

  depositForm=this.fb.group({
      acno:['',[Validators.required, Validators.pattern('[0-9]+')]],
      pswd:['',[Validators.required, Validators.pattern('[a-zA-Z0-9]+')]],
      amnt:['',[Validators.required, Validators.pattern('[0-9]+')]]
  })

  withdrawForm=this.fb.group({
    acno2:['',[Validators.required, Validators.pattern('[0-9]+')]],
    pswd2:['',[Validators.required, Validators.pattern('[a-zA-Z0-9]+')]],
    amnt2:['',[Validators.required, Validators.pattern('[0-9]+')]]
})

  deposit(){
    var acno=this.depositForm.value.acno 
    var password=this.depositForm.value.pswd
    var amount=this.depositForm.value.amnt

    if(this.depositForm.valid){ 
    this.ds.deposit(acno,password,amount).subscribe((result:any)=>{
      alert(result.message)
    },
    result=>{
      alert(result.error.message)
    }
    )
  }
  else{
    alert("invalid form")
  }
  }

  withdraw(){
    var accnum=this.withdrawForm.value.acno2
    var pswd=this.withdrawForm.value.pswd2
    var amount=this.withdrawForm.value.amnt2

    if(this.withdrawForm.valid){ 
      this.ds.withdraw(accnum,pswd,amount).subscribe((result:any)=>{
        alert(result.message)
    },
    result=>{
      alert(result.error.message)
      }
      )
    }
    else{
      alert("invalid form")
    }
  }

  logout(){
    localStorage.removeItem("currentUser")
    localStorage.removeItem("currentAcno")
    this.router.navigateByUrl("")
  }

  deleteAcc(){
    this.acno=JSON.parse(localStorage.getItem("currentAcno") || "")
  }

  cancelChild(){
    this.acno="" //account number is empty. So the s1 class in style.css doesn't work
  }

  ondeleteAcc(event:any){
    this.ds.deleteAcc(event).subscribe((result:any)=>{
      alert(result.message)
      this.logout()
    })
  }
}
