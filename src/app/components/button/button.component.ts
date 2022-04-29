//Ademas de las importaciones por defecto, agrego Input para que pueda recibir un input y output, para llevar las cosas al header.
//Importamos el EventEmitter que va a emitir justamente el evento hacia fuera del componente en acción
// Esto sirve para reutilizar el botón
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {
//Agrego inputs y outputs al boton
  @Input() text: string = '';
  @Input() color: string = '';
  @Output() btnClick = new EventEmitter()

  constructor() { }

  ngOnInit(): void {
  }

  //Creo la función onclick(), que se va a emitir a btnClick del componente header: 

  onClick(){
    this.btnClick.emit();
  }

}
