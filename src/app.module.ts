import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
//Animation material
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

//material
import {MaterialModule} from './material';
import { TransaccionesComponent } from './transacciones/transacciones.component';
import { TransaccionesService } from './transacciones/transacciones.service';

import { RouterModule, Routes} from '@angular/router';
import { HttpClientModule } from '@angular/common/http'

const routes: Routes = [
  {path: '', redirectTo: '/transacciones', pathMatch: 'full'},
  {path: 'transacciones', component: TransaccionesComponent}
];
@NgModule({
  declarations: [
    AppComponent,
    TransaccionesComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule,
    RouterModule.forRoot(routes)
  ],
  providers: [TransaccionesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
