import { Component, effect, input, OnInit, signal } from '@angular/core';
import { RankingRowCard } from "../ranking-row-card/ranking-row-card";
import { RankingHeaderCard } from "../ranking-header-card/ranking-header-card";
import { RankingsState } from '../../../shared/services/rankings-state';
import { RankingRequest } from '../models/ranking-request';

@Component({
  selector: 'app-ranking-card',
  imports: [RankingRowCard, RankingHeaderCard],
  templateUrl: './ranking-card.html',
  styleUrl: './ranking-card.css'
})
export class RankingCard {
  difficulty = input<string>('')

  
  rankingRequest = signal<RankingRequest>({
    difficulty: '',
    page: 0,
    size: 8
  });


    constructor(public rankingState: RankingsState) {
      effect(() => {
        const diff = this.difficulty();
        if (!diff) return;
        this.rankingState.loadRanking({ difficulty: diff, page: 0, size: 8 });
      });

  }


}
