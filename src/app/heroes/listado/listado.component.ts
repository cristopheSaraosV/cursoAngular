import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent  {

  public heroes: string[] = ['Iron man', 'Spider man', 'Thor', 'Hulk' ]
  public heroeEliminado:string = '';

  eliminarHeroe():void {
    this.heroeEliminado = this.heroes.pop() || '';
  }

   
}
