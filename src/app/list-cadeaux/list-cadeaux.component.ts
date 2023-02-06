import { Component, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { Modelcadeau } from 'src/model';

@Component({
  selector: 'app-list-cadeaux',
  templateUrl: './list-cadeaux.component.html',
  styleUrls: ['./list-cadeaux.component.scss']
})
export class ListCadeauxComponent {

  
@Input()listeCadeaux$!:Modelcadeau[]
@Input()loading=false;

images$!: Observable<string| undefined>[];
constructor(){

}
 ngOnInit(): void {

 



   
 }

}
