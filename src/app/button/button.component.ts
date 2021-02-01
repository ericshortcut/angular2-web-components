import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent {

  @Output()
  onClickEvent = new EventEmitter<null>();

  constructor() { }

  onClick(){
    this.onClickEvent.emit();
  }

}
