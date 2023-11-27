import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

const option={    //creating header globaly for header overlaping
  headers:new HttpHeaders()
}

@Injectable({
  providedIn: 'root'
})

export class DataService {
  currentUser:any
  currentAcno:any 
  userDetails:any

  constructor( private http:HttpClient ) {
    // this.getDetails()
  }

  
  delete(){
    if(localStorage.getItem("currentUser")){
      localStorage.removeItem("currentUser")
    }
    if(localStorage.getItem("currentAcno")){
      localStorage.removeItem("currentAcno")
    }
  }
  
  getToken(){ 
    const token=JSON.parse(localStorage.getItem("token") || "") //access token
    let headers=new HttpHeaders() //generate header
    if (token){ //check token accessed or not
      option.headers=headers.append('access_token',token)  //add token into headers
    }
    return option
  }

  register(uname:any, accno:any, psw:any){
    const data={uname,accno,psw}
    return this.http.post('http://localhost:3000/register',data)
  }
  
  login(acno:any, psw:any){
    const data={acno,psw}
    return this.http.post('http://localhost:3000/login',data)

  }

  deposit(acno:any, password:any, amount:any){
    var amnt=parseInt(amount)
    var userdetails=this.userDetails
    const data={acno,password,amount}
    return this.http.post('http://localhost:3000/deposit',data,this.getToken())
  }

  withdraw(acno:any,password:any,amount:any){    
    var userdetails=this.userDetails
    var amnt=parseInt(amount)
    const data={acno,password,amount}
    return this.http.post('http://localhost:3000/withdraw',data,this.getToken())
}

  getTransaction(acno:any){
    const data={acno}
    return this.http.post('http://localhost:3000/transaction',data,this.getToken())
}

  deleteAcc(acno:any){
    return this.http.delete('http://localhost:3000/delete/'+acno,this.getToken())
  }
  
  }





