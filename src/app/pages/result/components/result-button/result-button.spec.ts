import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultButton } from './result-button';

describe('ResultButton', () => {
  let component: ResultButton;
  let fixture: ComponentFixture<ResultButton>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResultButton]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResultButton);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
