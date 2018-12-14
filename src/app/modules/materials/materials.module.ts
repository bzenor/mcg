/********************************
 * materials.module
 * Package and class imports
 *******************************/
import { NgModule } from '@angular/core';
import {
  MatButtonModule,
  MatGridListModule,
  MatIconModule
} from '@angular/material';

/********************************
 * Module declaration
 *******************************/
@NgModule({
  exports: [
    MatButtonModule,
    MatGridListModule,
    MatIconModule
  ]
})
export class MaterialsModule { }
