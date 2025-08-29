import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultBody } from './result-body';

describe('ResultBody', () => {
  let component: ResultBody;
  let fixture: ComponentFixture<ResultBody>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResultBody]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResultBody);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
