import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnrolleetrackerComponent } from './enrolleetracker.component';

describe('EnrolleetrackerComponent', () => {
  let component: EnrolleetrackerComponent;
  let fixture: ComponentFixture<EnrolleetrackerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnrolleetrackerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EnrolleetrackerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
