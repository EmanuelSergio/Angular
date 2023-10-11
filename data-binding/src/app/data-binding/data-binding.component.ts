import { Component } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent {

url:string = 'http://loiane.com'
urlImagen:string = 'http://lorempixel.com.br/600/400'
cursoAngular:boolean = true



getValor(){
  return 1
}

getCurtirCurso(){
  return true
}

}
