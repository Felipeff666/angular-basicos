import { Component } from '@angular/core';
import { producto } from '../interfaces/productos.interface';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent {

  constructor() { }
  nuevo:producto ={
    nombreProducto : '',
    precio : 0
  }
}
