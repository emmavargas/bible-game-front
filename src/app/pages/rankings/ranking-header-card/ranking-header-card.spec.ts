import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RankingHeaderCard } from './ranking-header-card';

describe('RankingHeaderCard', () => {
  let component: RankingHeaderCard;
  let fixture: ComponentFixture<RankingHeaderCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RankingHeaderCard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RankingHeaderCard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
