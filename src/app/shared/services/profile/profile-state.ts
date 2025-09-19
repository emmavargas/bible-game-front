import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProfileState {
  name = signal<string>('');
  lastname = signal<string>('');
  email = signal<string>('');
  username = signal<string>('');
  scoreEasy = signal<number>(0)
  scoreMedium = signal<number>(0)
  scoreHard = signal<number>(0);

  setName(newName: string) {
    this.name.set(newName);
  }
  getName() {
    return this.name();
  }
  setLastname(newLastname: string) {
    this.lastname.set(newLastname);
  }
  getLastname() {
    return this.lastname();
  }
  setEmail(newEmail: string) {
    this.email.set(newEmail);
  }
  getEmail() {
    return this.email();
  }
  setUsername(newUsername: string) {
    this.username.set(newUsername);
  }
  getUsername() {
    return this.username();
  }
  setScoreEasy(newScoreEasy: number) {
    this.scoreEasy.set(newScoreEasy);
  }
  getScoreEasy() {
    return this.scoreEasy();
  }
  setScoreMedium(newScoreMedium: number) {
    this.scoreMedium.set(newScoreMedium);
  }
  getScoreMedium() {
    return this.scoreMedium();
  }
  setScoreHard(newScoreHard: number) {
    this.scoreHard.set(newScoreHard);
  }
  getScoreHard() {
    return this.scoreHard();
  } 
  getScore(difficulty: string){
    if(difficulty === 'FACIL'){
      return this.getScoreEasy();
    } else if (difficulty === 'MEDIO'){
      return this.getScoreMedium();
    } else if (difficulty === 'DIFICIL'){
      return this.getScoreHard();
    } else {
      return 0;
    }
  }
}
