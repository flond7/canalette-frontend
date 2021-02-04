import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DbRowComponent } from './db-row.component';

describe('DbRowComponent', () => {
  let component: DbRowComponent;
  let fixture: ComponentFixture<DbRowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DbRowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DbRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
