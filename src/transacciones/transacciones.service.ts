import { Injectable } from '@angular/core';
import { TRANSACCION } from './transacciones.json';
import { Transacciones } from './transacciones';
import { of, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TransaccionesService {
  private urlEndPoint:string = 'http://localhost:8080/api/transacciones'
  constructor(private http: HttpClient) { }

  getTransacciones(): Observable<Transacciones[]>
  {
    //return of(TRANSACCION);
    return this.http.get<Transacciones[]>(this.urlEndPoint);
  }
}
