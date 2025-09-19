import { Component, computed, effect, input, signal } from '@angular/core';
import { ProfileState } from '../../../../shared/services/profile/profile-state';

@Component({
  selector: 'app-profile-score-card',
  imports: [],
  templateUrl: './profile-score-card.html',
  styleUrl: './profile-score-card.css'
})
export class ProfileScoreCard {
  iconCircle = input<string>('');
  difficulty = input<string>('');
  score = signal(0);
  constructor(public profileState: ProfileState) {
    effect(() => {
      const dif = this.difficulty();
      this.score.set(this.profileState.getScore(dif));
    });
  }


/*  score = computed(
    () => {
      const difficulty = this.difficulty()
      this.profileState.getScore(difficulty);
      return console.log(this.profileState.getScoreEasy());
    }
  );
  */

}
