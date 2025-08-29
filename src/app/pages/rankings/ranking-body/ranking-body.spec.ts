import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RankingBody } from './ranking-body';

describe('RankingBody', () => {
  let component: RankingBody;
  let fixture: ComponentFixture<RankingBody>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RankingBody]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RankingBody);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
