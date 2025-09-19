import { Component, computed } from '@angular/core';
import { GameState } from '../../../../shared/services/game-state';

@Component({
  selector: 'app-game-header',
  imports: [],
  templateUrl: './game-header.html',
  styleUrl: './game-header.css'
})
export class GameHeader {

  hearts = computed(() => {
    return '♥'.repeat(this.gameState.getLives());
  });

  difficulty = computed(() => {
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
  });

  constructor(public gameState: GameState) { }




}
