import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecoveryExpiredLayout } from './recovery-expired-layout';

describe('RecoveryExpiredLayout', () => {
  let component: RecoveryExpiredLayout;
  let fixture: ComponentFixture<RecoveryExpiredLayout>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RecoveryExpiredLayout]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecoveryExpiredLayout);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
