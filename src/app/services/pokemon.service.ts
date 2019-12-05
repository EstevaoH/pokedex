import { Injectable } from '@angular/core';
import { Pokemon } from '../models/artista';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  pokemon: Pokemon[];

  private url = 'https://pokeapi.co/api/v2/';
  pokeurl = 'https://pokeapi.co/api/v2/pokemon/?offset=0&limit=151';


  constructor(private http: HttpClient) { 
    this.pokemon = [];
  }

  buscarPokemons(p: string) {
    return this.http.get<Pokemon>(p).toPromise();
  }

  buscarPokemon(p: string) {
    return this.http.get<Pokemon>(`${this.url}pokemon/${p}`).toPromise();
  }

  todosPokemos() {
    return this.http.get<any>(this.pokeurl).toPromise();
  }

  adicionaPokemon(p: Pokemon) {
    if (p != null) {
      this.pokemon.push(p);
      console.log(p.name + ' adicionado!');
    }
  }

  listarPokemon(): Array<Pokemon> {
    return this.pokemon;
  }


}
