import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent {

  @Input()
  label = "";

  @Input()
  set value( val:string ){
    this._value = val;
  }

  _value:string;

  @Output()
  onChangeEvent = new EventEmitter<string>();

  onChange(event){
    this._value = event.target.value;
    this.onChangeEvent.emit(this._value);
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log("changes.categoryId.currentValue")
   }
   


  constructor() { }

}
