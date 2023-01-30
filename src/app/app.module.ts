import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListCadeauxComponent } from './list-cadeaux/list-cadeaux.component';
import { CarteCadeauxComponent } from './carte-cadeaux/carte-cadeaux.component';

@NgModule({
  declarations: [
    AppComponent,
    ListCadeauxComponent,
    CarteCadeauxComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
