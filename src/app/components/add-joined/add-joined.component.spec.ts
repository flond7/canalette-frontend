import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddJoinedComponent } from './add-joined.component';

describe('AddJoinedComponent', () => {
  let component: AddJoinedComponent;
  let fixture: ComponentFixture<AddJoinedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddJoinedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddJoinedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
