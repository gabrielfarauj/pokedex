import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokedexService {

  baseUrl = 'https://pokeapi.co/api/v2/';


  constructor(private http : HttpClient) {
  }

  pokemonName(pokemonName : string | number) : Observable<any> {
    return this.http.get<any>(`${this.baseUrl}pokemon/${pokemonName}`);
  }

  pokemonSpecies(pokemonName : string) : Observable<any>{
    return this.http.get<any>(`${this.baseUrl}pokemon-species/${pokemonName}`);
  }

  pokemonGender(pokemonName : string) : Observable<any>{
    return this.http.get<any>(`${this.baseUrl}gender/${pokemonName}`);
  }

  // newGetPokemon(search: string | number){
  //   return this.http.get<any>(`${this.baseUrl}pokemon/${search}`)
  // }
}
