import { Component } from '@angular/core';
import { DataService } from '../services/data.service';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

  username:any
  constructor(private ds: DataService, private fb:FormBuilder){
    this.username=this.ds.currentUser

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
    var accnum=this.depositForm.value.acno
    var password=this.depositForm.value.pswd
    var amount=this.depositForm.value.amnt

    if(this.depositForm.valid){ 
    const result=this.ds.deposit(accnum,password,amount)
        if(result){
          alert(`Amount ${amount} deosited successfully and the available balance is ${result}`)
        }
        else{
          alert(`incorrect accoount number or password`)
        }
      }
  }

  withdraw(){
    var accnum=this.withdrawForm.value.acno2
    var pswd=this.withdrawForm.value.pswd2
    var amount=this.withdrawForm.value.amnt2

    if(this.withdrawForm.valid){ 
      const result=this.ds.withdraw(accnum,pswd,amount)
      if(result){
        alert(`Amount ${amount} withdrew successfully and the available balance is ${result}`)
      }
      else{
        alert(`incorrect accoount number or password`)
      }
    }
  }



}
