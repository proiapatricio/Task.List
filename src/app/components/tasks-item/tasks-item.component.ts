//Importo el Input para que pueda recibir una tarea
import { Component, OnInit, Input } from '@angular/core';
//Importo la interfase
import { Task } from 'src/app/Task';
//Importo la base de datos de tareas
import { TASKS } from 'src/app/mock-tasks';

@Component({
  selector: 'app-tasks-item',
  templateUrl: './tasks-item.component.html',
  styleUrls: ['./tasks-item.component.css']
})
export class TasksItemComponent implements OnInit {
//Inicializo tarea que sera un input
  @Input() tareaItem: Task = TASKS[0];

  constructor() { }

  ngOnInit(): void {
  }

}