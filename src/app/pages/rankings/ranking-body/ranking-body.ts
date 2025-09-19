// ranking-body.ts
import { Component, computed } from '@angular/core';
import { RankingCard } from "../ranking-card/ranking-card";
import { RankingPaginatorCard } from "../ranking-paginator-card/ranking-paginator-card";
import { RankingsState } from '../../../shared/services/rankings-state';

@Component({
  selector: 'app-ranking-body',
  imports: [RankingCard, RankingPaginatorCard],
  templateUrl: './ranking-body.html',
  styleUrl: './ranking-body.css'
})
export class RankingBody {

  constructor(public rankingState: RankingsState) { }

  onNext(difficulty: string) {
    const current = this.rankingState.getRanking(difficulty);
    this.rankingState.loadRanking({
      difficulty: difficulty,
      page: current.page + 1,
      size: current.size
    });
  }

  onPrevious(difficulty: string) {
    const current = this.rankingState.getRanking(difficulty);
    this.rankingState.loadRanking({
      difficulty: difficulty,
      page: current.page - 1,
      size: current.size
    });
  }
}