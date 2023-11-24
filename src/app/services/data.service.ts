import { Injectable } from '@angular/core';
// import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  currentUser:any
  currentAcno:any 
  // 
  userDetails:any
  // 

  // userDetails:any={   
  //   1000:{username:"anu", acno:1000, password:"1234", balance:0, transaction:[]},
  //   1001:{username:"amal", acno:1001, password:"1234", balance:0, transaction:[]},
  //   1002:{username:"arun", acno:1002, password:"1234", balance:0, transaction:[]},
  //   1003:{username:"megha", acno:1003, password:"1234", balance:0, transaction:[]}
  // }
  
  constructor( ) {
    this.getDetails()
  }

  // created a method to store in localstorage
  saveDetails(){
    if(this.userDetails){
      localStorage.setItem("userDetails",JSON.stringify(this.userDetails))
    }
    if(this.currentUser){
      localStorage.setItem("currentUser",this.currentUser)
    }
    if(this.currentAcno){
      localStorage.setItem("currentAcno",JSON.stringify(this.currentAcno))
    }
  }
  // created a method to access data from localstorage 
  getDetails(){
    if(localStorage.getItem("userDetails")){
      this.userDetails=JSON.parse(localStorage.getItem("userDetails") || "")
    }
    if(localStorage.getItem("currentUser")){
      this.currentUser=localStorage.getItem("currentUser")
    }
    if(localStorage.getItem("currentAcno")){
      this.currentAcno=JSON.parse(localStorage.getItem("currentAcno") || "")
    }
  }
// created a method to delete data from localstorage 
  delete(){
    if(localStorage.getItem("currentUser")){
      localStorage.removeItem("currentUser")
    }
    if(localStorage.getItem("currentAcno")){
      localStorage.removeItem("currentAcno")
    }
  }



  
  register(uname:any, accno:any, psw:any){
    var userdetails=this.userDetails
    if(accno in userdetails ){
      return false
    }
    else{
      userdetails[accno]={username:uname, acno:accno, password:psw, balance:0, transaction:[]}
      console.log(userdetails); 
      this.saveDetails()   //
      return true
    }
  }
  
  login(acno:any, psw:any){
    // console.log("hello",acno,psw);
    
    var userDetails=this.userDetails
    if(acno in userDetails){
      if(psw==userDetails[acno]["password"]){   
        this.currentUser=userDetails[acno]["username"]

        this.currentAcno=acno  
        this.saveDetails()  //
        // this.router.navigateByUrl("dashboard")  
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
        
          userdetails[accnum]["transaction"].push({ Type:"credit",Amount:amnt}) 
          this.saveDetails()  //
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


          userdetails[accnum]["transaction"].push({Type:"debit",Amount:amnt})
          this.saveDetails()  //
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





