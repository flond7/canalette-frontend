import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnagraficComponent } from './anagrafic.component';

describe('AnagraficComponent', () => {
  let component: AnagraficComponent;
  let fixture: ComponentFixture<AnagraficComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnagraficComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnagraficComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
