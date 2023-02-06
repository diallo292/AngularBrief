import { Observable } from "rxjs"


export class modelFavoris {

    nom!:string 
    descriptif!:string
prix!: number
image!: Promise<string| undefined>

}
