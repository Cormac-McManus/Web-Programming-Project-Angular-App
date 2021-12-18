import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarUIComponent } from './car-ui.component';

describe('CarUIComponent', () => {
  let component: CarUIComponent;
  let fixture: ComponentFixture<CarUIComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarUIComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarUIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
