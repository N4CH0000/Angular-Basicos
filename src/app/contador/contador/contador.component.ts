import { Component } from "@angular/core";
@Component({
    selector: 'app-contador',
    template: `

<h1>{{titulo}}</h1> 
<button (click)="acumular(+1)">+ 1</button>
<h1>{{numero}}</h1>
<button (click)="acumular(-1)">- 1</button>
<button (click)="acumular(base)">+ {{base}}</button>
<h1>{{numero}}</h1>
<button (click)="acumular(-base)">- {{base}}</button>
`
})
export class ContadorComponent {
    titulo:string = 'Contador App';
  numero:number = 10;
  base:number = 5;
  acumular(valor:number){
    this.numero +=valor;
  }
}