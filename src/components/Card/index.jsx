
import { CardProjetos } from "../CardProjetos";

export function Card(){
    return(
        <div class="md:ml-6 md:grid md:gap-x-10 md:gap-y-10 md:grid-cols-3 md:mt-10">
         <CardProjetos/>
      </div>
    )
}