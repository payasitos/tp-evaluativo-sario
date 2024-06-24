import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VistaVisitanteComponent } from './vista-visitante.component';

describe('VistaVisitanteComponent', () => {
  let component: VistaVisitanteComponent;
  let fixture: ComponentFixture<VistaVisitanteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VistaVisitanteComponent]
    });
    fixture = TestBed.createComponent(VistaVisitanteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
