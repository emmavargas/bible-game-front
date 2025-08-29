import { Component, output, Output, signal } from '@angular/core';
import { QuizCard } from "../quiz-card/quiz-card";
import { QuizStart } from "../quiz-start/quiz-start";

@Component({
  selector: 'app-quiz-body',
  imports: [QuizCard, QuizStart],
  templateUrl: './quiz-body.html',
  styleUrl: './quiz-body.css'
})
export class QuizBody {

  activeIndex = signal<number>(-1);

  difficulty = signal<string>('EASY');

  difficultyOption = output<string>();


  handleActive(index: number, difficulty: string) {
    this.activeIndex.set(index);
    this.difficulty.set(difficulty);
    this.difficultyOption.emit(difficulty);
  }

}
