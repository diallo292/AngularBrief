import { Component, Input } from '@angular/core';
import { Modelcadeau } from 'src/model';

@Component({
  selector: 'app-favoris',
  templateUrl: './favoris.component.html',
  styleUrls: ['./favoris.component.scss']
})
export class FavorisComponent {

 @Input() listeFavoris!:Modelcadeau[]

}
