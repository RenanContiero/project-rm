import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CalculadoraComponent } from './calculadora/calculadora.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatMenuModule} from '@angular/material/menu';
import {MatInputModule} from '@angular/material/input';
import { MatIconModule } from "@angular/material/icon";
import { HttpClientModule } from "@angular/common/http";

import { CanadianComponent } from './canadian/canadian.component';
import { DolarComponent } from './dolar/dolar.component';
import { AustralianComponent } from './australian/australian.component';
import { EuroComponent } from './euro/euro.component';
import { LibraComponent } from './libra/libra.component';

@NgModule({
  declarations: [
    AppComponent,
    CalculadoraComponent,
    CanadianComponent,
    DolarComponent,
    AustralianComponent,
    EuroComponent,
    LibraComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatMenuModule,
    MatInputModule,
    MatIconModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
