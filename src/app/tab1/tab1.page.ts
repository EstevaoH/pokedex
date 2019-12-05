import { Component } from '@angular/core';
import { Pokemon } from '../models/artista';
import { PokemonService } from '../services/pokemon.service';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  
  
  pokemon: Pokemon;
  
  constructor(private ps: PokemonService, private route: ActivatedRoute) {
    this.pokemon = new Pokemon();
  }
  

  buscar(name: string){
    this.ps.buscarPokemon(this.pokemon.name).then(
      res =>{
        this.pokemon = res;
        console.log(res)
      }
    )
  };

  favoritos(pokemon: Pokemon){
    this.ps.adicionaPokemon(pokemon);
    console.log(this.pokemon);
  }

}
