import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BarraProgresoComponent } from './barra-progreso/barra-progreso.component';



@NgModule({
  declarations: [BarraProgresoComponent],
  imports: [
    CommonModule
  ],
  exports: [
    BarraProgresoComponent
  ]
})
export class ComponentesCompartidosModule { }