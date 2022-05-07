//Este servicio va a permitir manejar los datos, en este caso la ista de tareas, el mock
import { Injectable } from '@angular/core';
//vamos a leer los datos desde la base de datos. Esto nos permites hacer llamadas GET y POST a nuestro servidor que tenemos montado en un puerto (en este caso puerto 5000)
import {HttpClient, HttpHeaders} from '@angular/common/http'
//Importo una libreria que permite definir si un metodo es observable o asincronico
import { Observable, of } from 'rxjs';
//Importo el mock y la interfase de los datos
import {Task} from '../Task';
import {TASKS} from '../mock-tasks';

//agrego esto para usarlo en actualizar la base de datos, lo que se va a mandar desde updateTaskReminder es un json
const httpOptions = {
  headers: new HttpHeaders( {
    'Content-Type':'application/json'
  } )
}

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  //Defino una constante para guardar la URL del servidor
  private apiUrl = 'http://localhost:5000/tasks'

  //Inicializo un metodo
  constructor(
    private http: HttpClient
  ) { }
  
  //Creo un método que va a devolver la lista de tareas. El método va a ser un observable
  getTasks(): Observable<Task[]> {
    return this.http.get<Task[]>(this.apiUrl)
  }

   //voy a tener unafuncion que borre la tarea emitida por task.component. Genero una variable donde le paso la url donde estan los datos, 
   //pero además el id de la tarea a borrar. Luego hago un delete y le paso la url creada en el paso antes.
  deleteTask(task: Task): Observable<Task> {
     const url = `${this.apiUrl}/${task.id}`
     return this.http.delete<Task>(url)
   }

   //en este caso usamos put para actualizar la base de datos
   updateTaskReminder(task: Task): Observable<Task> {
    const url = `${this.apiUrl}/${task.id}` 
    return this.http.put<Task>(url, task, httpOptions)
   }

   //agrego una funcion que va a permitir recibir una tarea y agregarla a la base de datos
   addTask(task: Task): Observable<Task> {
    return this.http.post<Task>(this.apiUrl, task, httpOptions);
   }

   //automaticReminder(task: Task): Observable<Task> {
 //    return console.log()
  // }

}
