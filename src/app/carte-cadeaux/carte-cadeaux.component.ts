import { HttpClient } from '@angular/common/http';
import { Component, Input } from '@angular/core';
import { Observable, observable } from 'rxjs';
import { Modelcadeau } from 'src/model';

@Component({
  selector: 'app-carte-cadeaux',
  templateUrl: './carte-cadeaux.component.html',
  styleUrls: ['./carte-cadeaux.component.scss']
})
export class CarteCadeauxComponent {

 constructor(private httpclient:HttpClient){}

  @Input()cadeau!:Modelcadeau
  confirmation=false;

  Enregistrer(){
     this.httpclient.post<Modelcadeau>('http://localhost:3000/list',this.cadeau).subscribe({
       
      complete:()=>  this.confirmation=true


      }
        );



  }
  

}
