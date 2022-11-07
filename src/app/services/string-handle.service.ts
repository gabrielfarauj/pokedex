import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class StringHandleService {
  constructor() {}

  firstWordUper(words: string[]) {
    let arrayUper: string[] = [];
    for (const word of words) {
      arrayUper.push(word.charAt(0).toUpperCase() + word.slice(1));
    }

    return arrayUper;
  }

  abilitiesHandle(abilities: string[] | any) {
    let abilitysName: string[] = [];
    for (const ability of abilities) {
      abilitysName.push(ability.ability.name);
    }
    return this.firstWordUper(abilitysName);
  }

  typeHandle(types: string[] | any) {
    let typeName: string[] = [];
    for (const type of types) {
      typeName.push(type.type.name);
    }

    return this.firstWordUper(typeName);
  }

  idHandle(id: number | string, size : number = 3){
    let newId = String(id);

    while(newId.length < size){
      newId = '0' + newId;
    }
    return newId;
  }

  // idHandle(id: number) {
  //   if (id < 10) {
  //     return '00' + id.toString();
  //   } 

  //   else if (id < 100) {

  //     return '0' + id.toString();
  //   }

  //    else {
  //     return id;
  //   }
  // }
}
