import { Component, OnInit } from '@angular/core';
import { PokemonAbout } from 'src/app/pokemonAbout';

import { PokedexService } from 'src/app/services/pokedex.service';
import { StringHandleService } from 'src/app/services/string-handle.service';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})
export class PokemonComponent implements OnInit {

  about = false;
  pokemonAbout? : PokemonAbout;
  pokemonName : string = '';

  constructor(private pokedex : PokedexService,
    private stringHandle : StringHandleService) { }

  ngOnInit(): void {
    
  }

  async getPokemon(search: string){
    let allAbilities : string;
    this.pokemonName = this.stringHandle.firstWordUper(search);
    await this.pokedex.pokemonName(search).subscribe(item => {
      console.log(item)
      this.stringHandle.abilitiesHandle(item.abilities)
      // for (const abilitys of item.abilities) {
      //   allAbilities += (', ' + abilitys.ability.name);
      // }

      this.pokemonAbout = {
        name: this.pokemonName,
        abilities : allAbilities,
        height : item.height,
        weight : item.weight,
        species: item.types[0].type.name
      }

    });

  }


}
