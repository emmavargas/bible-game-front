import { TestBed } from '@angular/core/testing';

import { GameQuiz } from './game-quiz';

describe('GameQuiz', () => {
  let service: GameQuiz;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GameQuiz);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
