import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductosComponent } from './productos/productos.component';
import { EnlistarComponent } from './enlistar/enlistar.component';
import { IndexComponent } from './index/index.component';
import { FormsModule } from '@angular/forms';
import { carritoService } from './services/carrito.service';



@NgModule({
  declarations: [
    ProductosComponent,
    EnlistarComponent,
    IndexComponent
  ],
  exports:[
    IndexComponent,
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  providers:[
    carritoService
  ]
})
export class CarritoModule { }
