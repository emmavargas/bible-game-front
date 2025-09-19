import { Component, input } from '@angular/core';

@Component({
  selector: 'app-ranking-row-card',
  imports: [],
  templateUrl: './ranking-row-card.html',
  styleUrl: './ranking-row-card.css'
})
export class RankingRowCard {

  username = input.required<string>()
  score = input.required<number>()
  date = input.required<string>()
  position = input.required<number>()
}
