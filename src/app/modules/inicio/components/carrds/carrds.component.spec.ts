import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarrdsComponent } from './carrds.component';

describe('CarrdsComponent', () => {
  let component: CarrdsComponent;
  let fixture: ComponentFixture<CarrdsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CarrdsComponent]
    });
    fixture = TestBed.createComponent(CarrdsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
