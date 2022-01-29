import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { Heroesmodule } from './heroes/heroes.module';
import { contadorModule } from './contador/contador.module';
import { DbzModule } from './dbz/dbz.module';
import { CarritoModule } from './carrito/carrito.module';



@NgModule({
  declarations: [
    AppComponent,
    
  ],
  imports: [
    BrowserModule,
    Heroesmodule,
    contadorModule,
    DbzModule,
    CarritoModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
