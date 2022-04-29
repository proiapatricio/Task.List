//Importo la interfase creada para el manejo de las TASKS
import { Task } from "./Task"

//Creo un arreglo de tareas de Task
export const TASKS : Task[] = [
    {
        id : 1,
        text: 'Terminar primer módulo de Angular',
        day: 'Agosto 5 a las 12:00 hs', 
        reminder: true
    },

    {
        id : 2,
        text: 'Sacar a Simón',
        day: 'Agosto 5 a las 18:00 hs', 
        reminder: true
    },

    {
        id: 3,
        text: 'Comprar',
        day: 'Agosto 5 a las 19:00 hs', 
        reminder: false
    },

    {
        id: 4,
        text: 'Mimir',
        day: 'Agosto 6 a las 00:00 hs', 
        reminder: false
        }
]