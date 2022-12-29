import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpinnerInfoComponent } from './spinner-info.component';

describe('SpinnerInfoComponent', () => {
  let component: SpinnerInfoComponent;
  let fixture: ComponentFixture<SpinnerInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpinnerInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpinnerInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
