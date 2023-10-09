import { Component } from '@angular/core';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent {

  nomePortal: any; //any = aceita qualquer tipo de valor, string, number...

  constructor(){
    this.nomePortal = 'https://loiane.training/'
  }




}

