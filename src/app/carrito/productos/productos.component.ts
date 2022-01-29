import { Component} from '@angular/core';
import { producto } from '../interfaces/productos.interface';
import { carritoService } from '../services/carrito.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent  {

  get productos(){
    return this.carritoService.producto;
  }

  constructor( private carritoService:carritoService) { }

 

}
