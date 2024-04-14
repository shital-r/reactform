import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateemployeelistComponent } from './createemployeelist.component';

describe('CreateemployeelistComponent', () => {
  let component: CreateemployeelistComponent;
  let fixture: ComponentFixture<CreateemployeelistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateemployeelistComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateemployeelistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
