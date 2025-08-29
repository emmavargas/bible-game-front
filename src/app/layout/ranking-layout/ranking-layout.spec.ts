import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RankingLayout } from './ranking-layout';

describe('RankingLayout', () => {
  let component: RankingLayout;
  let fixture: ComponentFixture<RankingLayout>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RankingLayout]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RankingLayout);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
