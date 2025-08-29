import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RankingPaginatorCard } from './ranking-paginator-card';

describe('RankingPaginatorCard', () => {
  let component: RankingPaginatorCard;
  let fixture: ComponentFixture<RankingPaginatorCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RankingPaginatorCard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RankingPaginatorCard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
