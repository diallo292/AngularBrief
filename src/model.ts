import { Observable } from "rxjs"

export class Modelcadeau {

    nom!:string 
    descriptif!:string
prix!: number
image!: Promise<string| undefined>

}

