import { Component } from '@angular/core'


@Component({
    selector:"app-contador",
    template:`
    
    <h1>{{title}}</h1>
    <h1>La base es {{base}}</h1>
    
    <button (click)="acumular(-base)"> - {{base}}</button>
    <span>{{number}}</span>
    <button (click)="acumular(base)"> + {{base}}</button>
    `
})

export class ContadorComponent{
    public title:string = 'Contador App';
    public number:number = 10;
    public base:number = 10;
    
    acumular( valor:number) :void {
        this.number += valor;
    }

    restar() :void {
        this.number += 1;
    }
}