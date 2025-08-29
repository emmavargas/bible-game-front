import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RankingRowCard } from './ranking-row-card';

describe('RankingRowCard', () => {
  let component: RankingRowCard;
  let fixture: ComponentFixture<RankingRowCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RankingRowCard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RankingRowCard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
