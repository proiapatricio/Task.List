//Este servicio va a permitir manejar los datos, en este caso la ista de tareas, el mock
import { Injectable } from '@angular/core';
//vamos a leer los datos desde la base de datos. Esto nos permites hacer llamadas GET y POST a nuestro servidor que tenemos montado en un puerto (en este caso puerto 5000)
import {HttpClient, HttpHandler} from '@angular/common/http'
//Importo una libreria que permite definir si un metodo es observable o asincronico
import { Observable, of } from 'rxjs';
//Importo el mock y la interfase de los datos
import {Task} from '../Task';
import {TASKS} from '../mock-tasks';
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
  getTareas(): Observable<Task[]> {
    //const tareas = of(TASKS);
    //return tareas
    return this.http.get<Task[]>(this.apiUrl)
  }


}
