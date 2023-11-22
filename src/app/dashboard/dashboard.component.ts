import { Component } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

  accnum:any
  password:any
  amount:any

  accnum2:any
  password2:any
  amount2:any

  username:any
  constructor(private ds: DataService){
    this.username=this.ds.currentUser

  }
  deposit(){
    var accnum=this.accnum
    var password=this.password
    var amount=this.amount

    const result=this.ds.deposit(accnum,password,amount)
    if(result){
      alert(`Amount ${amount} deosited successfully and the available balance is ${result}`)
    }
    else{
      alert(`incorrect accoount number or password`)
    }
  }

  withdraw(){
    var accnum=this.accnum2
    var pswd=this.password2
    var amount=this.amount2

    const result=this.ds.withdraw(accnum,pswd,amount)
    if(result){
      alert(`Amount ${amount} withdrew successfully and the available balance is ${result}`)
    }
    else{
      alert(`incorrect accoount number or password`)
    }
  }



}
