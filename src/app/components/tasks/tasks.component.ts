import { Component, OnInit } from '@angular/core';
//Importo la lista de tareas y la interfase
import {Task} from '../../Task'
import {TASKS} from '../../mock-tasks'

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

  //Inicializo la lista de tareas como un arreglo Task de la interfase TASKS
  listaTareas: Task[] = TASKS;

  constructor() { }

  ngOnInit(): void {
  }

}
