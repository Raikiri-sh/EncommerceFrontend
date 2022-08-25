import {NgModule} from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import { MatTableModule} from '@angular/material/table';
import { MatSortModule} from '@angular/material/sort';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';
import {MAT_FORM_FIELD_DEFAULT_OPTIONS} from "@angular/material/form-field";
import { MatPaginatorModule} from "@angular/material/paginator";

@NgModule({
  imports: [
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    MatInputModule,
    MatTableModule,
    MatSortModule,
    MatToolbarModule,
    MatMenuModule,
    MatIconModule,
    MatPaginatorModule,

  ],
  exports: [
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    MatInputModule,
    MatTableModule,
    MatSortModule,
    MatToolbarModule,
    MatMenuModule,
    MatIconModule,

  ] ,
   providers : [
    {provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: {appearance: 'fill'}}
  ]
})
export class MaterialModule {
}
