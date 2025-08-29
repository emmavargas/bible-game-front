import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { GameState } from '../../services/game-state';

@Component({
  selector: 'app-header',
  imports: [RouterLink],
  templateUrl: './header.html',
  styleUrl: './header.css'
})

export class Header {

  constructor(public gameState: GameState) {
    // Initialization logic can go here
  }
  
}
