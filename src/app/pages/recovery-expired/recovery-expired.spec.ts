import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecoveryExpired } from './recovery-expired';

describe('RecoveryExpired', () => {
  let component: RecoveryExpired;
  let fixture: ComponentFixture<RecoveryExpired>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RecoveryExpired]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecoveryExpired);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
