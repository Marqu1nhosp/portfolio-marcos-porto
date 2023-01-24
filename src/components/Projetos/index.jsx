import React, { useState } from "react";
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";


import { Card } from "../Card";
import { Contatos } from "../Contatos";




export function Projetos() {
    return (
       <>
        <h1 id="projetos" className="text-[#64ffda] mt-36 font-roboto-bold uppercase object-center text-center md:text-3xl">Projetos</h1>

          <Card/>

        <Contatos/>
      </>
     )
        
    }
      