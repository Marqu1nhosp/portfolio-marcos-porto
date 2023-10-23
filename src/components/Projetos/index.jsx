import React from 'react'

import 'pure-react-carousel/dist/react-carousel.es.css'

import { Card } from '../Card'
import { Contatos } from '../Contatos'

export function Projetos() {
  return (
    <>
      <h1
        id="projetos"
        className="text-[#64ffda] mt-10 font-roboto font-bold uppercase object-center text-center md:text-3xl"
      >
        Projetos
      </h1>

      <Card />

      <Contatos />
    </>
  )
}
