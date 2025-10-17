import { NgClass } from '@angular/common';
import { Component, input, output, Output } from '@angular/core';

@Component({
  selector: 'app-button1',
  imports: [NgClass],
  templateUrl: './button1.html',
  styleUrl: './button1.css'
})
export class Button1 {

  idform = input<string>('');

  disabled = input<boolean>(false);

  clicked = output();

  textBtn = input<string>('');

  onClick(){
    if (this.disabled()) return; // <- bloqueo cuando está disabled
    this.clicked.emit();
  }

}
