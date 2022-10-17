import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokedexService {

  baseUrl = 'https://pokeapi.co/api/v2/';


  constructor(private http : HttpClient) {}

  pokemonName(pokemonName : string) : Observable<any> {
    return this.http.get(`${this.baseUrl}pokemon/${pokemonName}`);
  }

}
