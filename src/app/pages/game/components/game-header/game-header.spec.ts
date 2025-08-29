import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameHeader } from './game-header';

describe('GameHeader', () => {
  let component: GameHeader;
  let fixture: ComponentFixture<GameHeader>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GameHeader]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GameHeader);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
