import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListDrainComponent } from './list-drain.component';

describe('ListDrainComponent', () => {
  let component: ListDrainComponent;
  let fixture: ComponentFixture<ListDrainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListDrainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListDrainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
