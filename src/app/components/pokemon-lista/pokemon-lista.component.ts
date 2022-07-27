import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { MatSnackBar } from '@angular/material/snack-bar';
import { forkJoin, Observable } from 'rxjs';
import { PokemonDetalle } from '../../interfaces/pokemon-detalle';
import { PokemonLista } from '../../interfaces/pokemon-lista';
import { PokemonService } from '../../services/pokemon.service';
import { PokemonDetalleComponent } from '../pokemon-detalle/pokemon-detalle.component';
import { PageEvent } from '@angular/material/paginator';
@Component({
  selector: 'app-pokemon-lista',
  templateUrl: './pokemon-lista.component.html',
  styleUrls: ['./pokemon-lista.component.sass']
})
export class PokemonListaComponent implements OnInit {
  pageSize = 6;
  i:number = 1;
  desde:number =0;
  hasta:number =6;


  search: FormControl = new FormControl('');
  pokemons: PokemonDetalle[] = [];
  classicMode: boolean = true;

  private offset: number;
  isLoading: boolean;
  isLastPage = false;

  searchPokemon: PokemonDetalle = new PokemonDetalle();
  isSearching = false;

  constructor(private pokemonService: PokemonService,
              private bottomSheet: MatBottomSheet,
              private snackBar: MatSnackBar) { 
                this.offset = 0 ;
              }

  

  ngOnInit(): void {
    this.getPage(this.offset);
  }

  getPage(offset: number) {
    if(!this.isLoading && !this.isLastPage) {
      this.isLoading = true;
      this.pokemonService.getPokemonLista(offset)
      .subscribe((list: PokemonLista[]) => {
        if(list.length === 0) {
          this.isLastPage = true;
        }

        if(!this.isLastPage) {
          this.getPokemon(list);
          
        }
      });
    }
  }

  onSearchPokemon(): void {
    const value = this.search.value;
    if(value === '') {
      this.isSearching = false;
    } else {
      this.isSearching = true;
      this.isLoading = true;
      this.pokemonService.getPokemonDetalle(value)
      .subscribe((pokemon: PokemonDetalle) => {
        this.searchPokemon = pokemon;
        this.isLoading = false;
      }, (error: any) => {
        this.isLoading = false;
        if(error.status === 404) {
          this.snackBar.open('Lo siento, Pokémon no encontrado', 'Intente con otro nombre', {
            duration: 5000,
          });
        }
      })
    }
  }

 /* onScroll(event: Event): void {
    const element: HTMLDivElement = event.target as HTMLDivElement;
    if(element.scrollHeight - element.scrollTop < 1000) {
      this.getPage(this.offset);
    }
  }*/
  cambiarpagina(e:PageEvent){
    console.log(e);
    this.desde = e.pageIndex * e.pageSize;
    this.hasta = this.desde + e.pageSize;
    console.log(this.desde);
    console.log(this.hasta);
  }

  private getPokemon(list: PokemonLista[]) {
    const arr: Observable<PokemonDetalle>[] = [];
    list.map((value: PokemonLista) => {
      arr.push(
        this.pokemonService.getPokemonDetalle(value.name)
      );
    });
    
    forkJoin([...arr]).subscribe((pokemons: []) => {
      this.pokemons.push(...pokemons);
      this.offset +=20;
      this.isLoading = false;
    })
  }

  getPrincipalType(list: any[]) {
    return list.filter(x => x.slot === 1)[0]?.type.name;
  }

  onDetail(pokemon: PokemonDetalle): void {
    this.bottomSheet.open(PokemonDetalleComponent, {
      data: {pokemon, classicMode: this.classicMode}
    })
  }

}