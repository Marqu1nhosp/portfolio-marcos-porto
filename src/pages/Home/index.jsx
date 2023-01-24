import React from 'react';


import Eu from '../../assets/marcos.jpg'

import { HomeEu } from '../../components/HomeEu';
import Menu from '../../components/Menu';
import { Projetos } from '../../components/Projetos';
import { SobreMim } from '../../components/SobreMim';
//import Sidebar from '../../components/Sidebar';

import './styles.css'


export function Home() {
  return (
    <>
      <Menu />
      <div className="md:flex justify-around overflow-hidden mt-7 ml-7">
        <HomeEu />
      </div>
       <SobreMim />
       <Projetos/>  
    </>
  )
}

