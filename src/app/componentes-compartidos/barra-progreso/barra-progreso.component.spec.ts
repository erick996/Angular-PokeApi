import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BarraProgresoComponent } from './barra-progreso.component';

describe('BarraProgresoComponent', () => {
  let component: BarraProgresoComponent;
  let fixture: ComponentFixture<BarraProgresoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BarraProgresoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BarraProgresoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});


