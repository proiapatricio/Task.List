//Importo el Input para que pueda recibir una tarea, el output y el eventemmiter para que pueda sacar hacia afuera la funcion onDelete, y sea la lista quien
//elimine la tarea y no el componente
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
//Importo la interfase
import { Task } from '../../Task';
//Importo la base de datos de tareas
import { TASKS } from '../../mock-tasks';
//Importo el icono a usar de fontawesome (previamente instalado el paquete)
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-tasks-item',
  templateUrl: './tasks-item.component.html',
  styleUrls: ['./tasks-item.component.css']
})
export class TasksItemComponent implements OnInit {
//Inicializo tarea que sera un input
  @Input() taskItem : Task = TASKS[0];
  //Defino el output de tipo eventemitter que va a sacar una instancia del tipo Task
  @Output() onDeleteTask: EventEmitter<Task> = new EventEmitter();
  @Output() onToggleReminder: EventEmitter<Task> = new EventEmitter();
  //Llamo al icono que voy a usar (le pongo el mismo nombre)
  faCircleXmark = faCircleXmark;

  constructor() { }

  ngOnInit(): void {
  }
  //Creo el método onDelete que va a recibir un parámetro del tipo Task y lo va a eliminar. Esto lo va a emitir al componente padre, en 
  //este caso es tasks
  onDelete(task: Task){
    this.onDeleteTask.emit(task);
    console.log(task)
  }

  onToggle(task: Task){
    this.onToggleReminder.emit(task);
  }

}
