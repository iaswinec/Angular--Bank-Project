import { Component } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrl: './transaction.component.css'
})
export class TransactionComponent {

  transactionArray:any

  constructor(private ds: DataService){
    this.transactionArray=this.ds.getTransaction(this.ds.currentAcno)
    console.log("hi",this.transactionArray);
    
  }

}
