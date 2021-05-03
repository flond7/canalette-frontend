import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnagRelationsComponent } from './anag-relations.component';

describe('AnagRelationsComponent', () => {
  let component: AnagRelationsComponent;
  let fixture: ComponentFixture<AnagRelationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnagRelationsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnagRelationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
