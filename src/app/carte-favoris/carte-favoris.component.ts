import { Component, Input } from '@angular/core';
import { Modelcadeau } from 'src/model';
import { modelFavoris } from '../ModelFavoris';

@Component({
  selector: 'app-carte-favoris',
  templateUrl: './carte-favoris.component.html',
  styleUrls: ['./carte-favoris.component.scss']
})
export class CarteFavorisComponent {

  @Input()cadeau!:modelFavoris
  confirmation=false;
}
