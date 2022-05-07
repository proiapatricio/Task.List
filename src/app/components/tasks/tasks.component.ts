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
  taskList: Task[] = [];
  //dentro del constructor debemos inicializar el servicio
  constructor(
    private taskService: TaskService) { }
 
  //cuando se monte el componente llamamos al servicio, asi que creamos el método que lo hace. Como el servicio usa que los datos son observables,
  //hay que agregar suscribe() como una promesa, entonces cuando el getTareas finaliza recibimos un callback que nos devuelve el parametro de la respuesta (tareas),
  //y esa respuesta se la asignamos a listaTareas
  ngOnInit(): void {
   this.taskService
   .getTasks()
   .subscribe((tasks)=>(this.taskList = tasks));
  }

  //Creo la funcion deleteTarea() que va a recibir una tarea del tipo Task, y se lo vamos a pasar a la base de datos para que sea borrada, es decir, al servicio, 
  // llamo el metodo deleteTask credo en el servicio, y le paso la tarea a eliminar. Hacemos un suscribe, y cuando finalice, es decir, cuando obtenga la respuesta,
  //la lista de tareas nueva va a ser una lista de tareas filtrada donde se obtienen todos los id's distinto al que borramos
  deleteTask(task: Task){
    this.taskService
    .deleteTask(task)
    .subscribe(
      () => (this.taskList = this.taskList.filter( t =>  t.id !== task.id))
      );
  }

  //Cada vez que clickeo en alguna de las tarjetas cambia el estado del atributo 'reminder', de true pasa a false y al revés.
  //Además el cambio puede verse en la base de datos
  toggleReminder(task: Task){
    task.reminder = !task.reminder;
    this.taskService
    .updateTaskReminder(task)
    .subscribe();
  }

  //recibimos la tarea emitida por add-task y llamamos al servicio para pasarsela y que la agregue a la base de datos
  addTask(task: Task){
    this.taskService.addTask(task).subscribe((task)=>(
      this.taskList.push(task)
    ));
  }

  
}
