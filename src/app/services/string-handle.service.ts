import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StringHandleService {

  constructor() { }

  firstWordUper(name : string) {
     return name.charAt(0).toUpperCase() + name.slice(1); 
  }

  abilitiesHandle(abilities : string[] | any){
    let abilitysName! : string;
    
    for (const iterator of abilities) {
      abilitysName += this.firstWordUper(iterator.ability.name + ', ');
    }

    console.log(abilitysName);
  }
}
