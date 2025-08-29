import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RankingHeader } from './ranking-header';

describe('RankingHeader', () => {
  let component: RankingHeader;
  let fixture: ComponentFixture<RankingHeader>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RankingHeader]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RankingHeader);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
