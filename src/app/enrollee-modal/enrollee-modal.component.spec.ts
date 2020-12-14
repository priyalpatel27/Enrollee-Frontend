import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnrolleeModalComponent } from './enrollee-modal.component';

describe('EnrolleeModalComponent', () => {
  let component: EnrolleeModalComponent;
  let fixture: ComponentFixture<EnrolleeModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnrolleeModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EnrolleeModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
