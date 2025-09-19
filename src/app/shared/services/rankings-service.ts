import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PageDto } from '../../pages/rankings/models/page-dto';
import { RankingDto } from '../../pages/rankings/models/ranking-dto';
import { RankingRequest } from '../../pages/rankings/models/ranking-request';
import { RankingsProfileDto } from '../../pages/profile/models/rankings-profile-dto';

@Injectable({
  providedIn: 'root'
})
export class RankingsService {
  
    constructor(private http: HttpClient) {}

  getRankingsGlobal(rankingRequest: RankingRequest){
    return this.http.post<PageDto<RankingDto>>(`https://bibleapp.emmanueldev.com.ar/api/rankings`,
    rankingRequest,
    {withCredentials: true});
  }

  getRankingsUser(){
    return this.http.get<RankingsProfileDto>(`https://bibleapp.emmanueldev.com.ar/api/rankings`,{withCredentials: true});
  }

}
