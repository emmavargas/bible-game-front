import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameBody } from './game-body';

describe('GameBody', () => {
  let component: GameBody;
  let fixture: ComponentFixture<GameBody>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GameBody]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GameBody);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
