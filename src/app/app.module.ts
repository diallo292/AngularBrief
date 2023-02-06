import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListCadeauxComponent } from './list-cadeaux/list-cadeaux.component';
import { CarteCadeauxComponent } from './carte-cadeaux/carte-cadeaux.component';
import { AccueilComponent } from './accueil/accueil.component';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { NgxLoadingButtonsModule } from 'ngx-loading-buttons';

import { TopbarComponent } from './topbar/topbar.component';

import { HttpClientModule } from '@angular/common/http';
import { FavorisComponent } from './favoris/favoris.component';
export const routes:Routes=[

  {path : 'formulaire' ,component:AccueilComponent},
  
]

@NgModule({
  declarations: [
    AppComponent,
    ListCadeauxComponent,
    CarteCadeauxComponent,
    AccueilComponent,
    TopbarComponent,
    FavorisComponent,
  


 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
