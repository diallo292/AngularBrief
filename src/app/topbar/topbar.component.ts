import { HttpClient } from '@angular/common/http';
import { Component, Input } from '@angular/core';
import { Modelcadeau } from 'src/model';
import { modelFavoris } from '../ModelFavoris';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.scss']
})
export class TopbarComponent { 
  
  ListeFavoris!:any
  constructor(private httpclient:HttpClient){}




 
}
