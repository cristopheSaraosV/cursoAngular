import { Component } from "@angular/core";

@Component({
    selector:'app-heroe',
    templateUrl:'./heroe.component.html'
})

export class HeroeComponent{
    public nombre: string = 'Iron man';
    public edad: number = 32;


    obtenerNombre():string {
        return `${this.nombre} tiene ${this.edad} años.`
    }

    get nombreCapitalizado():string {
        return this.nombre.toUpperCase()
    }

    cambiarNombre():void {
        this.nombre = 'Thor';
    };

    cambiarEdad():void {
        this.edad = 5000
    };
}