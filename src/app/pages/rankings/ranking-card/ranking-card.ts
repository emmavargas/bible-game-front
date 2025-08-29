import { Component } from '@angular/core';
import { RankingRowCard } from "../ranking-row-card/ranking-row-card";
import { RankingHeaderCard } from "../ranking-header-card/ranking-header-card";
import { RankingPaginatorCard } from "../ranking-paginator-card/ranking-paginator-card";

@Component({
  selector: 'app-ranking-card',
  imports: [RankingRowCard, RankingHeaderCard, RankingPaginatorCard],
  templateUrl: './ranking-card.html',
  styleUrl: './ranking-card.css'
})
export class RankingCard {

}
