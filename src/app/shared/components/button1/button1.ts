import { Component, input, output, Output } from '@angular/core';

@Component({
  selector: 'app-button1',
  imports: [],
  templateUrl: './button1.html',
  styleUrl: './button1.css'
})
export class Button1 {

  clicked = output();

  textBtn = input<string>('');

  onClick(){
    this.clicked.emit();
  }

}
