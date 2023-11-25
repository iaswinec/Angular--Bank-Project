import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrl: './delete.component.css'
})
export class DeleteComponent {
  @Input() item:string | undefined 

  @Output() onCancel=new EventEmitter() //event creation

  constructor(){}

  cancel(){
    this.onCancel.emit()  //
  }



}

