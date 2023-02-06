import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
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
      // httpclient.post('http://localhost:3000/list',data1).subscribe({
      //   next: (data)=>{this. data=data},
      // complete:()=> console.log(this.data)


      // }
      //   );
      
    

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

console.log("les donnees"+text);
this.loading=true;
this.OpenAiService.getDataFromOpenAI(text).subscribe({

  
  next: (data)=>{this.dataFromOpenAi=data}
 

,complete: ()=>{
  this.loading=false;
 console.log("openaidata"+this.dataFromOpenAi)
 

  this.listeCadeaux$=JSON.parse(this.dataFromOpenAi);
  this.JsonShort(this.listeCadeaux$)
  
  this.ImageGenerator(this.listeCadeaux$);
 console.log("datajson"+this.dataFromOpenAi)
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
//this.ListeFavoris[i].image=this.FavorisFromJson[i].image.__zone_symbol__value;
    }
console.log(this.ListeFavoris)


   }

  
}

  
  
    );
}
else {this.favoris=false}
  
}
   

  JsonShort(list:Modelcadeau[])
{
  list=this.FavorisFromJson.sort((a: { prix: number; },b: { prix: number; })=>{

    if(a.prix<b.prix)
    return -1
    else return 1
  });

}



}

