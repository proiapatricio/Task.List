import { Component, OnInit } from '@angular/core';
// importo el servicio ui para ocultar/mostrar el formulario cuando se haga click en 'addTask' y el suscription para poder escucharlo
import {UiService} from '../../service/ui.service';
import {Subscription} from 'rxjs';
import {Router} from '@angular/router'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  
  title: string = 'My task list';
  //no se muestra el formulario al inicializar
  showAddTask: boolean = false;
  subscription? : Subscription;

  //dentro del constructor defino el servicio y luego llamo a subscription para poder escuchar cuando cambia la variable en otros componentes.
  //router servirá para decirnos donde estamos parados en el path
  constructor(
    private uiService: UiService,
    private router: Router
  ) {
    this.subscription = this.uiService
    .onToggle()
    .subscribe(value => this.showAddTask = value)
   }

  ngOnInit(): void {
  }

  //Defino la funcion toggleAddTask() donde vamos a llamar al servicio de ui y llamamos al metodo que cambia el estado del toggle
  toggleAddTask(){
    this.uiService
    .toggleAgregarTarea();
  }

  //creo una funcion para el route, para saber donde estamos. La funcion nos va a devolver el path, la url del router
  hasRoute(route:string){
    return this.router.url === route
  }

}
