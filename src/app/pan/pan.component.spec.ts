import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PANComponent } from './pan.component';

describe('PANComponent', () => {
  let component: PANComponent;
  let fixture: ComponentFixture<PANComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PANComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PANComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
