import { Component, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'contador',
  templateUrl: './output-property.component.html',
  styleUrls: ['./output-property.component.css']
})
export class OutputPropertyComponent {

@Output() mudouValor = new EventEmitter();

@Input() valor:number=0;

@ViewChild('campoInput', { static: true }) campoValorInput: ElementRef;

incrementa(){
  //this.valor++;
  this.campoValorInput.nativeElement.value++;
  this.mudouValor.emit({novoValor: this.valor});
}

decrementa(){
  //this.valor--
  this.campoValorInput.nativeElement.value--;
  this.mudouValor.emit({novoValor: this.valor});
}
constructor() {
  this.campoValorInput = new ElementRef('');
}


}
