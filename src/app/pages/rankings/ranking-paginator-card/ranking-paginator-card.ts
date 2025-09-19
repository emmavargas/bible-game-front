// ranking-paginator-card.ts
import { Component, computed, input, output } from '@angular/core';
import { RankingsState } from '../../../shared/services/rankings-state';

@Component({
  selector: 'app-ranking-paginator-card',
  imports: [],
  templateUrl: './ranking-paginator-card.html',
  styleUrl: './ranking-paginator-card.css'
})
export class RankingPaginatorCard {

  difficulty = input<string>('');

  // Define las salidas para emitir eventos
  next = output<string>();
  previous = output<string>();

  currentPage = computed(() => {
    return this.rankingState.getRanking(this.difficulty()).page +1;
  })

  lastPage = computed(() => {
    return this.rankingState.getRanking(this.difficulty()).totalPages;
  })


  constructor(public rankingState: RankingsState) {}

  isDisabledNext = computed(() => {
    const diff = this.difficulty();
    if (!diff) return true;
    return this.rankingState.getRanking(diff).last;
  });

  isDisabledPrevious = computed(() => {
    const diff = this.difficulty();
    if (!diff) return true;
    return this.rankingState.getRanking(diff).first;
  });
}