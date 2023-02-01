import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListCadeauxComponent } from './list-cadeaux/list-cadeaux.component';
import { CarteCadeauxComponent } from './carte-cadeaux/carte-cadeaux.component';
import { AccueilComponent } from './accueil1/accueil.component';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { SpinnerComponent } from './spinner/spinner.component';
import { LoadingInterceptor } from './loading.interceptor';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgxLoadingButtonsModule } from 'ngx-loading-buttons';
export const routes:Routes=[

  {path : 'formulaire' ,component:AccueilComponent},
  
]

@NgModule({
  declarations: [
    AppComponent,
    ListCadeauxComponent,
    CarteCadeauxComponent,
    AccueilComponent,
    SpinnerComponent,

 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,  NgxLoadingButtonsModule,
  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: LoadingInterceptor, multi: true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
