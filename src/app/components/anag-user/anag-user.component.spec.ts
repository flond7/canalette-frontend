import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnagUserComponent } from './anag-user.component';

describe('AnagUserComponent', () => {
  let component: AnagUserComponent;
  let fixture: ComponentFixture<AnagUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnagUserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnagUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
