import { Component } from '@angular/core';

import { CursosService } from './cursos.service';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent {

  nomePortal: any; //any = aceita qualquer tipo de valor, string, number...

  cursos:string[];

  constructor(private cursosService: CursosService){
    this.nomePortal = 'https://loiane.training/'


    //var servico = new CursosService();
    this.cursos = this.cursosService.getCursos()



  }




}

