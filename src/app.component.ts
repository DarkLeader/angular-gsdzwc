import { Component } from '@angular/core';
import {FormControl} from '@angular/forms';
import { takeUntil } from 'rxjs/operators';


export interface Food {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  foods: Food[] = [
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'}
  ];

  comercios = new FormControl();
  cadComercio = new FormControl();
  terminal = new FormControl();
  tipoTrans = new FormControl();
  moneda = new FormControl();
  estado = new FormControl();

  comerciosList: string[] = ['Todos', 'Cencosud'];
  cadComList: string[] = ['Todos', 'Cencosud', 'Credicorp', 'InkaFarma', 'Decameron', 'Intercorp'];
  terminalList: string[] = ['Todos','20958654'];
  tipoTransList: string[] = ['Todos', 'Depósito', 'Retiro', 'Pago de Tarjeta', 'Remesas', 'Pago de Credito', 'Pago de Servicios'];
  monedaList: string[] = ['Todos', 'Dólares', 'Colones', 'Pago de Tarjeta', 'Remesas', 'Pago de Credito', 'Pago de Servicios'];
  estadoList: string[] = ['Todos', 'Ajustado', 'Anulado', 'Declinada', 'Reversado', 'Reversado Batch', 'Temporal'];

  
}
