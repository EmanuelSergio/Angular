import { Component } from '@angular/core';

@Component({
  selector: 'app-meu-form',
  templateUrl: './meu-form.component.html',
  styleUrls: ['./meu-form.component.css']
})
export class MeuFormComponent {

  url:string = 'http://loiane.com'
  urlImagen:string = 'http://lorempixel.com.br/600/400'
  cursoAngular:boolean = true
  valorAtual:string = '';
  valorSalvo:string = '';
  isMouseOver:boolean=false

  nome:any='abc'

  pessoa = {

    nome:"Gustavo Lima",
    idade:20,
    endereco:""

  }

  onMouseOverOut(){
    this.isMouseOver = !this.isMouseOver
  }

  salvarValor(valor:string){
    this.valorSalvo = valor
  }

  onKeyUp(evento:KeyboardEvent){
    this.valorAtual = (<HTMLInputElement>evento.target).value
  }

  botaoClicado(){
    alert('botao acessado')
  }

  getValor(){
    return 1
  }

  getCurtirCurso(){
    return true
  }

}
