import { Component, effect, inject, OnInit, signal } from '@angular/core';
import { GameHeader } from './components/game-header/game-header';
import { GameBody } from "./components/game-body/game-body";
import { GameState } from '../../shared/services/game-state';
import { GameQuiz } from '../../shared/services/game-quiz';
import { GameResponseDto } from './models/game-response-dto';
import { Router } from '@angular/router';



@Component({
  selector: 'app-game',
  imports: [GameHeader, GameBody],
  templateUrl: './game.html',
  styleUrl: './game.css'
})
export class Game implements OnInit {

  
  private router = inject(Router);

  constructor(public gameState: GameState, private gameService: GameQuiz) { 
  
    effect(() => {
      if (this.gameState.getIsQuizCompleted()) {
        this.router.navigate(['/result']);
      }
    });
   }

  

  ngOnInit() {
    const sessionId = sessionStorage.getItem('sessionId');
    console.log('llego bien?', sessionId);
    if (sessionId) {
      // Restaurar estado desde el backend
      this.gameService.recoverySession(Number(sessionId)).subscribe({
        next: (state: GameResponseDto) => {
          this.restoreGameState(state);
          console.log('Estado restaurado:', state);
        },
        error: (err) => {
          this.startGame(); // si falla, iniciar nueva sesión
        }
      });
    } else {
      this.startGame(); // nueva sesión
    }
  }

  startGame() {
    const difficulty = this.gameState.getDifficulty();
    console.log('Starting game with difficulty:', difficulty);
    this.gameService.starGameSession(difficulty).subscribe({
      next: (response:GameResponseDto) => {
        console.log('Game session started:', response);
        this.gameState.setDifficulty(response.difficulty);
        this.gameState.setIsQuizCompleted(response.finished);
        this.gameState.setCurrentQuestionIndex(response.currentIndex);
        this.gameState.setTotalQuestions(response.totalQuestion); // Assuming 10 questions for simplicity
        this.gameState.setLives(response.lives);
        this.gameState.setScore(response.score); // Reset score to 0
        this.gameState.setNameUser('Emmanuel'); // Reset user name
        this.gameState.setQuestion(response.questionDto?.question ?? ''); // Reset question
        this.gameState.setHint(response.questionDto?.bibleVerseAnswer ?? ''); // Reset hint
        this.gameState.setAnswerLength(response.questionDto?.answerLength ?? 5); // Reset answer length
//        this.gameState.sessionId.set(response.sessionId); // Set session ID
//        this.gameReady.set(true); // Indicate that the game is ready
        this.gameState.setIdSession(response.idSession);
        sessionStorage.setItem('sessionId', response.idSession.toString());
        console.log('Session ID:', sessionStorage.getItem('sessionId'));


      },
      error: (error) => {
        console.error('Error starting game session:', error);
      }
    });
  }

  handleResponseQuestion(value: string) {
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
    this.gameState.setNameUser('Emmanuel');
    this.gameState.setQuestion(response.questionDto?.question ?? '');
    this.gameState.setHint(response.questionDto?.bibleVerseAnswer ?? '');
    this.gameState.setAnswerLength(response.questionDto?.answerLength ?? 3);
    this.gameState.setIdSession(response.idSession);
  }

  private restoreGameState(state: GameResponseDto) {
    this.gameState.setDifficulty(state.difficulty);
    this.gameState.setIsQuizCompleted(state.finished);
    this.gameState.setCurrentQuestionIndex(state.currentIndex);
    this.gameState.setTotalQuestions(state.totalQuestion);
    this.gameState.setLives(state.lives);
    this.gameState.setScore(state.score);
    this.gameState.setNameUser('Emmanuel');
    this.gameState.setQuestion(state.questionDto?.question ?? '');
    this.gameState.setHint(state.questionDto?.bibleVerseAnswer ?? '');
    this.gameState.setAnswerLength(state.questionDto?.answerLength ?? 3);
    this.gameState.setIdSession(state.idSession);

    // Mantener sessionId en sessionStorage
    sessionStorage.setItem('sessionId', state.idSession.toString());
  }




}
