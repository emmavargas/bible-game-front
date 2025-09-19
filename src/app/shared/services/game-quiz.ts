import { HttpClient } from '@angular/common/http';
import { Injectable, signal } from '@angular/core';
import { GameResponseDto } from '../../pages/game/models/game-response-dto';

@Injectable({
  providedIn: 'root'
})
export class GameQuiz {
  
  private apiUrl = 'https://bibleapp.emmanueldev.com.ar/api/game-session';

  constructor(private http: HttpClient) { }
  starGameSession(difficulty: string) {
    return this.http.post<GameResponseDto>(`${this.apiUrl}/start`, { difficulty },{withCredentials: true});
  }

  nextQuestion(idSession: number, answer: string) {
    return this.http.post<GameResponseDto>(`${this.apiUrl}/nextQuestion`, { idSession, answer },{withCredentials: true});
  }

//  recoverySession(idSession: number) {
//    return this.http.post<GameResponseDto>(`${this.apiUrl}`, { idSession },{withCredentials: true});
//  }

}
