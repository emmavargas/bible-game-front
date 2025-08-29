import { TestBed } from '@angular/core/testing';

import { RankingsState } from './rankings-state';

describe('RankingsState', () => {
  let service: RankingsState;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RankingsState);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
