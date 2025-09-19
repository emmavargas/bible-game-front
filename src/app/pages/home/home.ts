import { Component, signal } from '@angular/core';
import { QuizHeader } from './components/quiz-header/quiz-header';
import { QuizBody } from './components/quiz-body/quiz-body';
import { GameState } from '../../shared/services/game-state';
import { AuthService } from '../../shared/services/auth-service';


@Component({
  selector: 'app-home',
  imports: [QuizHeader, QuizBody],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {

  constructor(private gameState: GameState, authService: AuthService){
    authService.auth().subscribe({
      next: (response) => {
        gameState.nameUser.set(response.username);
      },
      error: (error) => {
        console.error('Login error:', error);
        // Maneja el error de login, como mostrar un mensaje al usuario
      }
    })
  }

  difficultySelected = signal<string>('');

  handleDifficultyChange(difficulty: string) {
    this.difficultySelected.set(difficulty);
    console.log('entro al home', difficulty);
    this.gameState.setDifficulty(this.difficultySelected());
  }
  


}
