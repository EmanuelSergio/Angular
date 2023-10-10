import { Injectable } from '@angular/core';

@Injectable({
 providedIn: 'root'
})
export class CursosService {

  constructor() { }

  getCursos(){
    return ['JAVA', 'NEXT.JS', 'TYPESCRIPT', 'OMG BRO']
  }


}

