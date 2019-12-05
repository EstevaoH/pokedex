import { Component, ViewChild } from '@angular/core';
import { Pokemon } from '../models/artista';
import { PokemonService } from '../services/pokemon.service';
import { of } from 'rxjs';
import { IonInfiniteScroll } from '@ionic/angular';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  //@ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;

  pokemon: Pokemon;
  listapokemon: Pokemon[];


  constructor(private ps: PokemonService) {
    this.pokemon = new Pokemon();
    this.listapokemon = [];
  }

  ngOnInit() {
    this.todosPokemons();
  };

  todosPokemons() {
    this.ps.todosPokemos().then(
      res => {
        for (let p = 0; p < res.results.length; p++) {
          this.ps.buscarPokemons(res.results[p].url).then(data => {
            //debugger;
            this.listapokemon.push(data);
            console.log(res)
          })
        };
      }
    );

  };


  loadData(event) {
    setTimeout(() => {
      console.log('Done');
      event.target.complete();
    }, 500);
  }


}
