import { Component, Inject, OnInit } from '@angular/core';
import { MAT_BOTTOM_SHEET_DATA } from '@angular/material/bottom-sheet';
import { PokemonDetalle } from '../../interfaces/pokemon-detalle';

@Component({
  selector: 'app-pokemon-detalle',
  templateUrl: './pokemon-detalle.component.html',
  styleUrls: ['./pokemon-detalle.component.sass']
})
export class PokemonDetalleComponent implements OnInit {

  pokemon: PokemonDetalle;
  classicMode: boolean;

  constructor(@Inject(MAT_BOTTOM_SHEET_DATA) public data: any) { 
    this.pokemon = data.pokemon;
    this.classicMode = data.classicMode;
  }

  ngOnInit(): void {
  }


  getAbilities(): string {
    return this.pokemon.abilities.map(x => x.ability.name).join(', ');
  }

  getPrincipalType(list: any[]) {
    return list.filter(x => x.slot === 1)[0]?.type.name;
  }

}