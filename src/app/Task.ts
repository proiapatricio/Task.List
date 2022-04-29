//Manejo de la base de datos como interface, para que haya consistencia entre los datos
export interface Task {
    id?: number;
    text: string;
    day: string;
    reminder: boolean;


}