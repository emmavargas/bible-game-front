import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultHeader } from './result-header';

describe('ResultHeader', () => {
  let component: ResultHeader;
  let fixture: ComponentFixture<ResultHeader>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResultHeader]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResultHeader);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
