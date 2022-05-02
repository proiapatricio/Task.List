import { Component, OnInit, Output, EventEmitter } from '@angular/core';
//importo el servicio de ui para mostrar/ocultar el formulario
import { UiService } from '../../service/ui.service';
import {Subscription} from 'rxjs';
import { Task } from '../../Task';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {
  //Defino el output que se va a emitir como una instancia de eventemitter del tipo Task
  @Output() onAddTarea: EventEmitter<Task> = new EventEmitter();

  //defino un texto, un dia y un reminder que luego vamos a recibir de entrada
  text: string= "";
  day: string= "";
  reminder: boolean = false;
  showAddTarea: boolean = false;
  subscription? : Subscription;

  constructor(
    private uiService : UiService
  ) { 
    this.subscription = this.uiService
    .onToggle()
    .subscribe(value => this.showAddTarea = value)
  }

  ngOnInit(): void {
  }

  //la funcion hará que salte un cartel si no hay nada en el campo tarea cuando se aprete el botón de save task.
  //Ademas guardo los campos de los inputs en newTask y lo emito hacia afuera, que lo va a recibir el componente tasks
  onSubmit(){
    if(this.text.length === 0){
      alert('Please add a task');
      return
    }

    const {text, day, reminder} = this
    const newTask={ text, day, reminder}

    this.onAddTarea.emit(newTask);
  }

}
