import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnagDrainComponent } from './anag-drain.component';

describe('AnagDrainComponent', () => {
  let component: AnagDrainComponent;
  let fixture: ComponentFixture<AnagDrainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnagDrainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnagDrainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
