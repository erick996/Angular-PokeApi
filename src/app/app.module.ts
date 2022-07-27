import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from "@angular/common/http";
import { MaterialModule } from "./material.module";
import { PokemonListaComponent } from './components/pokemon-lista/pokemon-lista.component';
import { PokemonDetalleComponent } from './components/pokemon-detalle/pokemon-detalle.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ComponentesCompartidosModule } from './componentes-compartidos/componentes-compartidos.module';
import { PokemonService } from './services/pokemon.service';
import { MatPaginatorModule } from '@angular/material/paginator';

@NgModule({
  declarations: [
    AppComponent,
    PokemonListaComponent,
    PokemonDetalleComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MaterialModule,
    ReactiveFormsModule,
    ComponentesCompartidosModule,
    MatPaginatorModule
  ],
  providers: [PokemonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
