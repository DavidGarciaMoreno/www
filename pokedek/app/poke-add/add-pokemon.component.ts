import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { Pokemon } from '../shared/pokemon';
import { PokemonService } from '../shared/pokemon.service';

@Component({
	moduleId: module.id,
	templateUrl: 'add-pokemon.template.html'
})
export class AddPokemonComponent {
  formPokemon: any = {};
  cardTitle: string = 'Add Pokemon';
  errorMessage: string;

  constructor(private _pokemonService: PokemonService,
              private _router: Router) { }

}
