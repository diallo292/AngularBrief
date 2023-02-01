import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule,FormGroup, Validators,FormBuilder} from '@angular/forms';
import { Modelcadeau } from 'src/model';
import { OpenAiService } from '../open-ai.service';
@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.scss']
})
export class AccueilComponent {
  modelcadeau$!:String[];
  form:FormGroup;
 
  loading=false;
  
  constructor(private OpenAiService:OpenAiService, private fb:FormBuilder){

 this.form= this.fb.group({
  prenom: ['', Validators.required],
  sexe: ['', Validators.required],
    interets: ['', Validators.required],
        age :['', Validators.required]

});
  }


Chercher(){
  this.loading = true;

  let age=this.form.get('age')?.value,interet=this.form.get('interets')?.value,prenom=this.form.get('prenom')?.value,sexe=this.form.get('sexe')?.value;
  let text= "une liste de 10 idees de cadeaux  noel pour  "+prenom+"un(e)"+sexe+"age de "+age+

  " ans, ayant pour centre d'interets"+ interet
 +" avec nom  prix et descriptif en  json" ;

console.log("les donnees"+prenom+" :"+age+":"+interet+":"+sexe);
this.loading=true;
this.OpenAiService.getDataFromOpenAI(text).subscribe({

  
  next: data=>this.modelcadeau$=data.split('\n')
 

,complete: ()=>{
  this.loading=false;
  console.log(this.modelcadeau$)

}
  
}

)
;
}


}
   

  




  

