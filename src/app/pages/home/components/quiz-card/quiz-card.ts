import { NgClass } from '@angular/common';
import { Component, EventEmitter, input, Output } from '@angular/core';

@Component({
  selector: 'app-quiz-card',
  imports: [NgClass],
  templateUrl: './quiz-card.html',
  styleUrl: './quiz-card.css'
})
export class QuizCard {

  isActive = input<boolean>(false);
  title = input<string>('');
  subtitle = input<string>('');
  hearts = input<string>('');
  color= input<string>('');




  @Output()
  active: EventEmitter<void> = new EventEmitter<void>();


  handleActive(){
    this.active.emit();
  }

}
