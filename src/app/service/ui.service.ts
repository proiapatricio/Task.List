//este servicio se usará para ocultar/mostrar el formulario para agregar una tarea
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UiService {
  //defino una variable de tipo booleano, es decir, si se va a mostrar o no, y un subject, que va a permitir escuchar eventos que vengan del template
  private showAddTask : boolean = false;
  private subject = new Subject<any>();

  constructor() { }

  //creamos una funcion para que el botón cambie de estado. Esto se va a llamar en el header, donde se encuentra el boton
  toggleAgregarTarea(): void{
    this.showAddTask = !this.showAddTask;
    this.subject.next(this.showAddTask);
  }

  onToggle(): Observable<any>{
    return this.subject.asObservable();
  }
}
