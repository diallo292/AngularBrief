import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './accueil1/accueil.component';
import { ReactiveFormsModule } from '@angular/forms';

export const routes:Routes=[

  {path : '' ,component:AccueilComponent},
  
]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
