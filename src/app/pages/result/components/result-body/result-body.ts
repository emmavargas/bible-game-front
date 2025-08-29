import { Component, input, signal } from '@angular/core';

@Component({
  selector: 'app-result-body',
  imports: [],
  templateUrl: './result-body.html',
  styleUrl: './result-body.css'
})
export class ResultBody {

  score = input.required<number>();
  username = input.required<string>();
  difficulty = input.required<string>();
  lives = input.required<number>();
  correctAnswersCount = input.required<number>();
  incorrectAnswersCount = input.required<number>();
  totalAnswers = input.required<number>();
}
