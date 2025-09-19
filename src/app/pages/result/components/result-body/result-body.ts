import { Component, computed, input, signal } from '@angular/core';
import { GameState } from '../../../../shared/services/game-state';
import { Router } from '@angular/router';

@Component({
  selector: 'app-result-body',
  imports: [],
  templateUrl: './result-body.html',
  styleUrl: './result-body.css'
})
export class ResultBody {

  diffulty = computed(() => {
    const level = this.gameState.difficulty();
    if (level === 'EASY') {
      return 'FÁCIL'; 
    }
    if (level === 'MEDIUM') {
      return 'MEDIO'; 
    }
    if (level === 'HARD') {
      return 'DIFÍCIL'; 
    }
    return '';
  })

  constructor(public gameState: GameState, private router: Router){
    if(gameState.nameUser() === ''){
      router.navigate(['/']);
    }
  }
}
