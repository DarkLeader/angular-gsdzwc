import { MatButtonModule, MatCheckboxModule, MatFormFieldModule } from '@angular/material';
import { NgModule } from '@angular/core';
import { MatTableModule} from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';

import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatNativeDateModule } from '@angular/material/core';
import { MatListModule } from '@angular/material/list';

import { NgxMatSelectSearchModule } from 'ngx-mat-select-search';

@NgModule({
  imports: [MatButtonModule, MatCheckboxModule, MatTableModule, MatToolbarModule, MatIconModule, MatSelectModule, MatInputModule, MatDatepickerModule, FormsModule, ReactiveFormsModule, MatNativeDateModule, MatListModule, MatPaginatorModule, MatFormFieldModule, NgxMatSelectSearchModule],
  exports: [MatButtonModule, MatCheckboxModule, MatTableModule, MatToolbarModule, MatIconModule, MatSelectModule, MatInputModule, MatDatepickerModule, FormsModule, ReactiveFormsModule, MatNativeDateModule, MatListModule, MatPaginatorModule, MatFormFieldModule, NgxMatSelectSearchModule],
})
export class MaterialModule { }