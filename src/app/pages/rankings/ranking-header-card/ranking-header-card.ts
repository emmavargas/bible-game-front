import { NgClass } from '@angular/common';
import { Component, computed, input } from '@angular/core';

@Component({
  selector: 'app-ranking-header-card',
  imports: [NgClass],
  templateUrl: './ranking-header-card.html',
  styleUrl: './ranking-header-card.css'
})
export class RankingHeaderCard {
  
  difficulty = input<string>('');
  nameDifficulty = computed<string>(() => {
    switch (this.difficulty()) {
      case 'EASY':
        return 'FACIL';
      case 'MEDIUM':
        return 'MEDIO';
      case 'HARD':
        return 'DIFICIL';
      default:
        return '';
    }
  });
}
