/********************************
 * base.module
 * Package and class imports
 *******************************/
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AppComponent } from './components/app/app.component';
import { CategoryComponent } from './components/category/category.component';
import { MaterialsModule } from '../materials/materials.module';

/********************************
 * Module declaration
 *******************************/
@NgModule({
  declarations: [
    AppComponent,
    CategoryComponent
  ],
  imports: [
    CommonModule,
    MaterialsModule
  ]
})
export class BaseModule { }
