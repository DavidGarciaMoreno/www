import { Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { Pokemon } from '../shared/pokemon';
import { PokemonService } from '../shared/pokemon.service';
import { ModalDirective } from 'ng2-bootstrap';
import { PokemonModalComponent } from './pokemon-modal.component';

@Component({
	moduleId: module.id,
  selector: 'pk-list',
	templateUrl: 'list-pokemons.template.html',
  styleUrls: ['list-pokemons.css']
})
export class ListPokemonComponent implements OnInit {
  @ViewChild('childModal') public childModal: PokemonModalComponent;
  pokemon: Pokemon[];
  errorMessage: string;

  // Modal properties
  pokeDetails: Pokemon;

  constructor(private _pokemonService: PokemonService,
              private viewContainerRef: ViewContainerRef) {}

  ngOnInit() {
    //get all Pokemons
    this.getPokemons();
  }

  getPokemons() {
    this._pokemonService.getPokemons()
        .subscribe(
          (pokemon: Pokemon[]) => {
            console.log(pokemon);
            this.pokemon = pokemon;
          },
          error => this.errorMessage = <any> error
        )
  }

  deletePokemon(pokemon: Pokemon) {
    this._pokemonService.deletePokemon(pokemon)
        .subscribe(
          () => this.deletePokemonFromList(pokemon),
          error => this.errorMessage = <any> error,
          () => {
            //this.getPokemons();
          }
        );
  }

  viewSinglePokemon(id: number) {
    this._pokemonService.getPokemonDetails(id)
        .subscribe(
          (pokemon: Pokemon) => {
            this.pokeDetails = pokemon;
            this.childModal.show();
          },
          error => this.errorMessage = <any> error
        )
  }

  private deletePokemonFromList(pokemon: Pokemon) {
    var index = this.pokemon.indexOf(pokemon, 0);
    if(index > -1) {
      this.pokemon.splice(index, 1);
    }
  }
}
