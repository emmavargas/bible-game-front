import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from "../../shared/components/header/header";
import { RankingHeader } from "../../pages/rankings/ranking-header/ranking-header";

@Component({
  selector: 'app-ranking-layout',
  imports: [RouterOutlet, RankingHeader],
  templateUrl: './ranking-layout.html',
  styleUrl: './ranking-layout.css'
})
export class RankingLayout {

}
