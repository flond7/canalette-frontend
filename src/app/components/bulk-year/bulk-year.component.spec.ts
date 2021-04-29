import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BulkYearComponent } from './bulk-year.component';

describe('BulkYearComponent', () => {
  let component: BulkYearComponent;
  let fixture: ComponentFixture<BulkYearComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BulkYearComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BulkYearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
