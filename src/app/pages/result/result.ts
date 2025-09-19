import { Component, computed } from '@angular/core';
import { GameState } from '../../shared/services/game-state';
import { ResultHeader } from "./components/result-header/result-header";
import { ResultBody } from "./components/result-body/result-body";
import { ResultButton } from "./components/result-button/result-button";

@Component({
  selector: 'app-result',
  imports: [ResultHeader, ResultBody, ResultButton],
  templateUrl: './result.html',
  styleUrl: './result.css'
})
export class Result {
  constructor(public gameState: GameState) { 
    console.log(gameState.nameUser());
  }

  ngOnDestroy() {
    // Limpiamos el estado cuando salimos de la pantalla de resultados
    this.gameState.setIsQuizCompleted(false);
  }
}
