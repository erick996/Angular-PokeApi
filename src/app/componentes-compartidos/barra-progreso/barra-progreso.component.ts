import { Component,Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-barra-progreso',
  templateUrl: './barra-progreso.component.html',
  styleUrls: ['./barra-progreso.component.sass']
})
export class BarraProgresoComponent implements OnInit {
  @Input() color = 'bug';
  @Input() value = 0;
  @Input() height = 20;

  constructor() { }

  ngOnInit(): void {
  }

}
