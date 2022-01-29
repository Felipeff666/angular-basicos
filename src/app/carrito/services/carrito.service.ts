import { Injectable} from "@angular/core";
import { producto } from '../interfaces/productos.interface';

@Injectable()
export class carritoService{
    
    private _productos:producto[]=[
        {
            nombreProducto:'Carne de res',
            precio:25
        },
        {
            nombreProducto:'leche',
            precio:5
        },
        {
            nombreProducto:'arroz',
            precio:6
        }
    ]
    get producto():producto[]{
        return [...this._productos];
    }
    
    agregarProducto(producto:producto){
        this._productos.push(producto);
    }
}