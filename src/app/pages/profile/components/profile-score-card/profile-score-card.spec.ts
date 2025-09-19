import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileScoreCard } from './profile-score-card';

describe('ProfileScoreCard', () => {
  let component: ProfileScoreCard;
  let fixture: ComponentFixture<ProfileScoreCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProfileScoreCard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfileScoreCard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
