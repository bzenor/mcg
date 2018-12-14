/********************************
 * app.module
 * Package and class imports
 *******************************/
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './modules/base/components/app/app.component'
import { BaseModule } from './modules/base/base.module';
import { CoreModule } from './modules/core/core.module';

/********************************
 * Module Definition
 *******************************/
@NgModule({
  imports: [
    BaseModule,
    BrowserModule,
    BrowserAnimationsModule,
    CoreModule.forRoot(),
    HttpClientModule
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
