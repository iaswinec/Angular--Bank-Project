import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrl: './delete.component.css'
})
export class DeleteComponent {
  @Input() item:string | undefined 

  @Output() onCancel=new EventEmitter() //event creation
  @Output() onDelete=new EventEmitter()
  constructor(){}

  cancel(){
    this.onCancel.emit()  
  }

  deleteacc(){
    this.onDelete.emit(this.item)  //
  }


}

