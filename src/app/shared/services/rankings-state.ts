import { Injectable, signal } from '@angular/core';
import { PageDto } from '../../pages/rankings/models/page-dto';
import { RankingDto } from '../../pages/rankings/models/ranking-dto';
import { RankingsService } from './rankings-service';
import { RankingRequest } from '../../pages/rankings/models/ranking-request';

@Injectable({
  providedIn: 'root'
})
export class RankingsState {
  
  easy = signal<PageDto<RankingDto>>({
    content: [],
    page: 0,
    size: 8,
    totalElements: 0,
    totalPages: 0,
    first: true,
    last: false
  });
  medium = signal<PageDto<RankingDto>>({
    content: [],
    page: 0,
    size: 8,
    totalElements: 0,
    totalPages: 0,
    first: true,
    last: false
  });

  hard = signal<PageDto<RankingDto>>({
    content: [],
    page: 0,
    size: 8,
    totalElements: 0,
    totalPages: 0,
    first: true,
    last: false
  });
  

    constructor(private rankingService: RankingsService) {}


  loadRanking(rankingRequest: RankingRequest) {
    console.log("dificultad"+ rankingRequest.difficulty);
    this.rankingService.getRankingsGlobal(rankingRequest).subscribe({
      next: (res) => {
        if (rankingRequest.difficulty === 'EASY') this.easy.set(res);
        console.log(res);
        if (rankingRequest.difficulty === 'MEDIUM') this.medium.set(res);
        if (rankingRequest.difficulty === 'HARD') this.hard.set(res);
      },
      error: () => {
        console.log('Error al obtener el ranking')
      }
    });
  }

  getRanking(difficulty: string){
    if (difficulty === 'EASY') return this.easy();
    if (difficulty === 'MEDIUM') return this.medium();
    if (difficulty === 'HARD') return this.hard();
    return { content: [], page: 0, size: 0, totalElements: 0, totalPages: 0, first: false, last: false };
  }
  
  
}
