import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-button2',
  imports: [],
  templateUrl: './button2.html',
  styleUrl: './button2.css'
})
export class Button2 {
  clicked = output();

  textBtn = input<string>('');

  onClick(){
    this.clicked.emit();
  }

}
