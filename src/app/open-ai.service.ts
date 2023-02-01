import { Injectable } from '@angular/core';
import { Configuration, OpenAIApi } from 'openai';
import { map } from 'rxjs';
import { from } from 'rxjs/internal/observable/from';
import { filter } from 'rxjs/internal/operators/filter';
import { environment } from 'src/environments/environment';
import {Modelcadeau} from 'src/model';


// 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


@Injectable({
  providedIn: 'root'
})
export class OpenAiService {

  readonly configuration = new Configuration({
    apiKey: environment.openAIToken
  });
  Modelcadeau!:String []

  readonly openai = new OpenAIApi(this.configuration);
  constructor() { }
   getDataFromOpenAI(text: string) {
    return from(this.openai.createCompletion({
      model: "text-davinci-003",
      prompt: text,
      max_tokens: 256
    })).pipe(
      filter(resp => !!resp && !!resp.data),
      map(resp => resp.data),
      filter((data: any) => data.choices && data.choices.length > 0 && data.choices[0].text),
      map(data => data.choices[0].text)
    );
    
  }
}



