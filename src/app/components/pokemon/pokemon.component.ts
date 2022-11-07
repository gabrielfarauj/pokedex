import { Component, OnInit } from '@angular/core';
import { map, Observable } from 'rxjs';
import { PokemonAbout } from 'src/app/pokemonAbout';

import { PokedexService } from 'src/app/services/pokedex.service';
import { StringHandleService } from 'src/app/services/string-handle.service';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css'],
})
export class PokemonComponent implements OnInit {
  pokemonAbout?: PokemonAbout;

  constructor(
    private pokedex: PokedexService,
    public stringHandle: StringHandleService
  ) {}

  ngOnInit(): void {
    this.getPokemon('bulbasaur');
  }

  getPokemon(search: string | number) {

    search = search.toString();

    this.pokedex.pokemonSpecies(search).subscribe((data) => {
      let monsterGroup: string[] = [];
      let biome: string;

      for (const group of data.egg_groups) {
        monsterGroup.push(group.name);
      }

      biome = data.habitat.name;

      monsterGroup = this.stringHandle.firstWordUper(monsterGroup);

      this.pokedex.pokemonName(search).subscribe((data) => {
        console.log(data);

        let id = this.stringHandle.idHandle(data.id);

        this.pokemonAbout = {
          name: data.name.charAt(0).toUpperCase() + data.name.slice(1),
          species: this.stringHandle.typeHandle(data.types),
          height: data.height,
          weight: data.weight,
          abilities: this.stringHandle.abilitiesHandle(data.abilities),
          monsterEggGroup: monsterGroup,
          type: this.stringHandle.typeHandle(data.types),
          id: id,
          biome: biome.charAt(0).toUpperCase() + biome.slice(1),
        };
      });
    });

    // this.pokedex.newGetPokemon(search).pipe(map(res => {
    //   const data = [];
    //   for (const key in res){
    //     data.push({...res[key], id : key})
    //   }
    //   return data
    // })).subscribe(res => {
    //   console.log(res);
    // });


  }

}
