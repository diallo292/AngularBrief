import { HttpClient } from '@angular/common/http';
import { Component, Input } from '@angular/core';
import { FormControl, ReactiveFormsModule,FormGroup, Validators,FormBuilder} from '@angular/forms';
import { generate, Observable } from 'rxjs';
import { Modelcadeau } from 'src/model';

import { OpenAiService } from '../open-ai.service';
@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.scss']
})
export class AccueilComponent {
  dataFromOpenAi!:string;
  form:FormGroup;
  completed=true;
  loading=false;
listeCadeaux$!:Modelcadeau[];
image!:string
  images$!: Promise<string| undefined>[];
  data!:any
  datafromJson:any
@Input()tempe!:Modelcadeau[]
  FavorisFromJson!: any ;
  ListeFavoris!:Modelcadeau[]
  favoris=false
  
  constructor(private httpclient:HttpClient ,private OpenAiService:OpenAiService, private fb:FormBuilder){

   let data1={
    "firname": "marcAndre",
    "street": "360000",
    "age": 25,
    "telephone": 2505875,
    "address": "52 rue degole",
    "birthday": "12/02/2005",
    "cardtype": "client",
    "img": "client1.jpg",
    "id": 17
  }
     
    

 this.form= this.fb.group({
  prenom: ['', Validators.required],
  sexe: ['', Validators.required],
    interets: ['', Validators.required],
        age :['', Validators.required]

});

  }


  ImageGenerator(list:Modelcadeau[]){
     for (let index = 0; index < list.length; index++) {
     
    list[index].image=
      this.OpenAiService.genImageFromOpenAI(list[index].descriptif)
      
     }
  

  }
  

Chercher(){
  this.loading = true;

  let age=this.form.get('age')?.value,interet=this.form.get('interets')?.value,prenom=this.form.get('prenom')?.value,sexe=this.form.get('sexe')?.value;
  let text= "une liste  de 6 cadeaux-Noël  pour  "+prenom+" de sexe "+sexe+",age "+age+

  " ans, ayant pour centre d'interets "+ interet
 +" .Le resultat en format json( nom(en minuscule), prix(en minsucule), descriptif(minuscule))" ;


this.loading=true;
this.OpenAiService.getDataFromOpenAI(text).subscribe({

  
  next: (data)=>{this.dataFromOpenAi=data}
 

,complete: ()=>{
  this.loading=false;
 
 this.tempe=JSON.parse(this.dataFromOpenAi);
 this.JsonShort(this.tempe);
 this.listeCadeaux$=this.tempe;

  this.ImageGenerator(this.listeCadeaux$);
  
   this.completed=false;
  



}
 


}

)
;
}

Favoris(){  
if(!this.favoris){  
  this.favoris=true ;
  this.httpclient.get('http://localhost:3000/list').subscribe({

  next: (data)=>{
   
    this.FavorisFromJson=data},
    
    complete: ()=>{
   
   this.JsonShort(this.FavorisFromJson)
    this.ListeFavoris=this.FavorisFromJson
    for(let i=0;i<this.FavorisFromJson.length;i++)
    {

this.ImageGenerator(this.ListeFavoris)

    }



   }

  
}

  
  
    );
}
else {this.favoris=false}
  
}
   

  JsonShort(list:Modelcadeau[])
{
  list.sort((a: { prix: number; },b: { prix: number; })=>{
    if(a.prix<b.prix)
    return -1
    else return 1
  });

}



}

