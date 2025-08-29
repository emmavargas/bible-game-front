import { Component } from '@angular/core';
import { RankingBody } from "./ranking-body/ranking-body";

@Component({
  selector: 'app-rankings',
  imports: [RankingBody],
  templateUrl: './rankings.html',
  styleUrl: './rankings.css'
})
export class Rankings {

}
