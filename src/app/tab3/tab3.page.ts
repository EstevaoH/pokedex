import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../models/artista';
import { PokemonService } from '../services/pokemon.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit {
  pokemon: Pokemon[];

  constructor(private ps: PokemonService) {
    this.pokemon = [];
  }

  ngOnInit(){
    this.pokemon = this.ps.listarPokemon();
    console.log(this.pokemon);
  }

  listar(){
    this.pokemon = this.ps.listarPokemon();
    console.log(this.pokemon)
  }

}
