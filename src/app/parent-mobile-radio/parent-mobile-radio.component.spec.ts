import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentMobileRadioComponent } from './parent-mobile-radio.component';

describe('ParentMobileRadioComponent', () => {
  let component: ParentMobileRadioComponent;
  let fixture: ComponentFixture<ParentMobileRadioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParentMobileRadioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParentMobileRadioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
