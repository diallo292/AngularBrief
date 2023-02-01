import { Component } from '@angular/core';
import { Model } from 'openai';
import { Modelcadeau } from 'src/model';
import { OpenAiService } from './open-ai.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'AngularBrief';
 modelcadeau!:String[]


  constructor(OpenAiService:OpenAiService){
  


  }
}
