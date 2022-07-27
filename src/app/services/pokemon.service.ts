import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { PokemonLista } from "../interfaces/pokemon-lista";
import { PokemonDetalle } from "../interfaces/pokemon-detalle";
import { map } from "rxjs/operators";


@Injectable({ providedIn: 'root' })
export class PokemonService {
    private baseUrl = 'https://pokeapi.co/api/v2/';

    constructor(private http: HttpClient) { }


    getPokemonLista(offset: number, limit: number = 1155): Observable<PokemonLista[]> {
        return this.http.get<PokemonLista[]>(this.baseUrl + 'pokemon?offset=' + offset + '&limit=' + limit)
            .pipe(
                map((x: any) => x.results)
            );
    }

    getPokemonDetalle(pokemon: number | string): Observable<PokemonDetalle> {
        return this.http.get<PokemonDetalle>(this.baseUrl + 'pokemon/' + pokemon);
    }

}