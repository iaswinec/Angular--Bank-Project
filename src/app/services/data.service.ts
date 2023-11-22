import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  currentUser:any
  currentAcno:any  //current account number

  userDetails:any={   //created  transaction array to store transactions
    1000:{username:"anu", acno:1000, password:"1234", balance:0, transaction:[]},
    1001:{username:"amal", acno:1001, password:"1234", balance:0, transaction:[]},
    1002:{username:"arun", acno:1002, password:"1234", balance:0, transaction:[]},
    1003:{username:"megha", acno:1003, password:"1234", balance:0, transaction:[]}
  }
  
  constructor(private router:Router, ) { }
  
  register(uname:any, accno:any, psw:any){
    var userdetails=this.userDetails
    if(accno in userdetails ){
      return false
    }
    else{
      userdetails[accno]={username:uname, acno:accno, password:psw, balance:0, transaction:[]}
      console.log(userdetails);    
      return true
    }
  }
  
  login(acno:any, psw:any){
    if(acno in this.userDetails){
      if(psw==this.userDetails[acno]["password"]){   
        this.currentUser=this.userDetails[acno]["username"]

        this.currentAcno=acno   //current account number
        
        this.router.navigateByUrl("dashboard")  
        return true
      }
      else{
        return false
        
      }
  }
  else{
    return false
    
  }
  }

  deposit(accnum:any, password:any, amount:any){
    var amnt=parseInt(amount)
    var userdetails=this.userDetails
    if(accnum in userdetails){
        if(password==userdetails[accnum]["password"]){
          userdetails[accnum]["balance"]+=amnt
          
          //add transaction data
          userdetails[accnum]["transaction"].push({ Type:"credit",Amount:amnt}) 
          
          console.log(this.userDetails);
          return userdetails[accnum]["balance"]
        }
        else{
          return false
        }
    }
    else{
      return false
    }
  }

  withdraw(accnum:any,pswd:any,amount:any){

      
    var userdetails=this.userDetails
    var amnt=parseInt(amount)

    if(accnum in userdetails){
      if(pswd==userdetails[accnum]["password"]){
        if(amnt<=userdetails[accnum]["balance"]){
          userdetails[accnum]["balance"]-=amnt

          //add transaction data
          userdetails[accnum]["transaction"].push({Type:"debit",Amount:amnt})
          console.log(this.userDetails);
          return userdetails[accnum]["balance"]
        }
        else{
          alert("insufficent balance")
        }          
      }
      else{
        return false
      }
    }
    else{
      return false
    }
}

  getTransaction(accnum:any){
    
    return this.userDetails[accnum].transaction
  }



  }





