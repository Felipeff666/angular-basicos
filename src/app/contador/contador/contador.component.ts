import{ Component } from '@angular/core';

@Component({
    selector: 'app-contador',
    template: `
        <h1>Bienvenidos al {{titulo}}</h1>
        <h2><strong>La base es: {{base}}</strong></h2>

        <button (click)=" acumular(-base)"> -{{base}} </button>
        <span> {{numero}} </span>
        <button (click)=" acumular(base)"> +{{base}} </button>

    `
})

export class contadorComponent{
  titulo:string = ' Contador Bases';
  numero:number = 10;
  base  :number =5;

  acumular(valor:number){
    this.numero += valor;
  }

 /*  sumar(){
    this.numero +=1
  }
  restar(){
    this.numero -=1
  } */
}