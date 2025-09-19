import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResetPasswordLayout } from './reset-password-layout';

describe('ResetPasswordLayout', () => {
  let component: ResetPasswordLayout;
  let fixture: ComponentFixture<ResetPasswordLayout>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResetPasswordLayout]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResetPasswordLayout);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
