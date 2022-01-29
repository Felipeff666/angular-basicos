import { Component, Input } from '@angular/core';
import { nuevo, producto } from '../interfaces/productos.interface';
import { carritoService } from '../services/carrito.service';

@Component({
  selector: 'app-enlistar',
  templateUrl: './enlistar.component.html',
  styleUrls: ['./enlistar.component.css']
})
export class EnlistarComponent {
  @Input()nuevo:any={}

  constructor(private carritoService:carritoService) { }


  agregar(){
    this.carritoService.agregarProducto(this.nuevo);
  }
}
