import { Component, OnInit } from '@angular/core';
//Importo el servicio que maneja el arreglo de tareas
import {TaskService} from '../../service/task.service'
//Importo la interfase
import { Task} from '../../Task'


@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

  //Inicializo la lista de tareas como un arreglo vacio
  listaTareas: Task[] = [];
  //dentro del constructor debemos inicializar el servicio
  constructor(
    private taskService: TaskService
  ) { }
 
  //cuando se monte el componente llamamos al servicio, asi que creamos el método que lo hace. Como el servicio usa que los datos son observables,
  //hay que agregar suscribe() como una promesa, entonces cuando el getTareas finaliza recibimos un callback que nos devuelve el parametro de la respuesta (tareas), y esa respuesta se 
  //la asignamos a listaTareas
  ngOnInit(): void {
   this.taskService.getTareas().subscribe((tareas)=>(
    this.listaTareas = tareas
   )
   );
  }

}
