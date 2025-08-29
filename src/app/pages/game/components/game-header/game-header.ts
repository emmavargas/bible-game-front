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

  constructor(public gameState: GameState) { }




}
