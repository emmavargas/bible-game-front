import { Component, computed, effect, inject, OnInit, signal } from '@angular/core';
import { GameHeader } from './components/game-header/game-header';
import { GameBody } from "./components/game-body/game-body";
import { GameState } from '../../shared/services/game-state';
import { GameQuiz } from '../../shared/services/game-quiz';
import { GameResponseDto } from './models/game-response-dto';
import { Router } from '@angular/router';
import { ProfileState } from '../../shared/services/profile/profile-state';



@Component({
  selector: 'app-game',
  imports: [GameHeader, GameBody],
  templateUrl: './game.html',
  styleUrl: './game.css'
})
export class Game implements OnInit {

  hint = computed<string>(() => {
    const pista = this.gameState.hint();
    const versiculo = this.gameState.getBibleVerseAnswer();
    const version = this.gameState.getBibleVersionL();
    return `${pista}\n${versiculo} - ${version}`;
  });

  
  private router = inject(Router);

  handleShowHint() {
    this.gameState.showHintInfo.set(true);
  }

  constructor(public gameState: GameState, private gameService: GameQuiz, private profileState: ProfileState) { 
  
    effect(() => {
      if (this.gameState.getIsQuizCompleted()) {
        this.router.navigate(['/result']);
      }
    });
  }

  

  ngOnInit() {
    this.startGame();
  }
  

  startGame() {
    // Limpiamos el estado anterior
    this.gameState.setIsQuizCompleted(false);
    this.gameState.setScore(0);
    this.gameState.setCorrectAnswersCount(0);
    this.gameState.setIncorrectAnswersCount(0);
    
    const difficulty = this.gameState.getDifficulty();
    console.log('Starting game with difficulty:', difficulty);
    this.gameService.starGameSession(difficulty).subscribe({
      next: (response:GameResponseDto) => {
        console.log('Game session started:', response);
        this.gameState.setDifficulty(response.difficulty);
        this.gameState.setCurrentQuestionIndex(response.currentIndex);
        this.gameState.setTotalQuestions(response.totalQuestion); // Assuming 10 questions for simplicity
        this.gameState.setLives(response.lives);
        this.gameState.setScore(response.score); // Reset score to 0
        this.gameState.setQuestion(response.questionDto?.question ?? ''); // Reset question
        this.gameState.setBibleVerseAnswer(response.questionDto?.bibleVerseAnswer ?? '');
        this.gameState.setBibleVersionL(response.questionDto?.bibleVersionL ?? '');
        this.gameState.setHint(response.questionDto?.hint ?? ''); // Reset hint
        this.gameState.setAnswerLength(response.questionDto?.answerLength ?? 5); // Reset answer length
        this.gameState.setIdSession(response.idSession);
      },
      error: (error) => {
        console.error('Error starting game session:', error);
      }
    });
  }

  handleResponseQuestion(value: string) {
    this.gameState.setShowHintInfo(false);
    if (this.gameState.isQuizCompleted()) {
      console.log('terminado');
      return;
    }

    const id = this.gameState.idSession();

    this.gameService.nextQuestion(id, value).subscribe({
      next: (response: GameResponseDto) => {
        // Primero, solo actualizamos feedback
        this.gameState.setIsCorrect(response.correct);
        this.gameState.setCorrectAnswer(response.correctAnswer);


        // Actualizamos también datos de score y vidas
        this.gameState.setLives(response.lives);
        this.gameState.setScore(response.score);
        this.gameState.setCorrectAnswersCount(response.gameOverDto?.correctAnswerCount ?? 0);
        this.gameState.setIncorrectAnswersCount(response.gameOverDto?.incorrectAnswerCount ?? 0);
        this.gameState.setShowResultInfo(true);

        //Esperamos 3 segundos antes de mostrar la siguiente pregunta
        setTimeout(() => {
          this.updateNextQuestion(response);
          console.log('Respuesta correcta:', this.gameState.isCorrect());
          console.log('response', response);
          console.log('info state', this.gameState);
          this.gameState.setShowResultInfo(false);


        }, 2000);

      },
      error: (error) => {
        console.error('Error fetching next question:', error);
      }
    });
  }

  // Función para actualizar la siguiente pregunta
  private updateNextQuestion(response: GameResponseDto) {
    this.gameState.setDifficulty(response.difficulty);
    this.gameState.setIsQuizCompleted(response.finished);
    this.gameState.setCurrentQuestionIndex(response.currentIndex);
    this.gameState.setTotalQuestions(response.totalQuestion);
    this.gameState.setQuestion(response.questionDto?.question ?? '');
    this.gameState.setHint(response.questionDto?.hint ?? '');
    this.gameState.setBibleVerseAnswer(response.questionDto?.bibleVerseAnswer ?? '');
    this.gameState.setBibleVersionL(response.questionDto?.bibleVersionL ?? '');
    this.gameState.setAnswerLength(response.questionDto?.answerLength ?? 3);
    this.gameState.setIdSession(response.idSession);
  }
}

