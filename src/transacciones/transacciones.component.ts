import { Component, OnInit, ViewChild } from '@angular/core';
import { Transacciones } from './transacciones'
import { TransaccionesService } from './transacciones.service';

import {MatPaginator} from '@angular/material/paginator';

@Component({
  selector: 'app-transacciones',
  templateUrl: './transacciones.component.html',
  styleUrls: ['transacciones.css']
})

export class TransaccionesComponent implements OnInit {

  
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  transaccion: Transacciones[];
  constructor(private transaccionService: TransaccionesService) { }
  
  displayedColumns: string[] = ['id', 'tipo', 'nombre'];
  columnsToDisplay: string[] = this.displayedColumns.slice();

  addColumn() {
    const randomColumn = Math.floor(Math.random() * this.displayedColumns.length);
    this.columnsToDisplay.push(this.displayedColumns[randomColumn]);
  }

  removeColumn() {
    if (this.columnsToDisplay.length) {
      this.columnsToDisplay.pop();
    }
  }

  
  ngOnInit() {
    this.transaccionService.getTransacciones().subscribe(
      (transaccion) =>  this.transaccion = transaccion
    );
    
  }

}

