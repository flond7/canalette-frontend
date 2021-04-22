import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnagYearComponent } from './anag-year.component';

describe('AnagYearComponent', () => {
  let component: AnagYearComponent;
  let fixture: ComponentFixture<AnagYearComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnagYearComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnagYearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
