import { Route, Routes } from 'react-router-dom'
import { MenuUlLi } from '../../components/MenuUlLi'
import { SobreMim } from '../SobreMim'
import { Alert } from 'flowbite-react'

export default function Menu(){
    return (
      <>
    <nav className="bg-[#0b1f3d] border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-900">
        <div className="container flex flex-wrap items-center justify-between mx-auto">
          <span className="self-center text-xl font-roboto whitespace-nowrap text-[#64ffda]">Bem-vindo(a) ao meu portfólio</span>

          <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-[#64ffda] focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
            <span className="sr-only">Menu</span>
            <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
          </button>
          <div className="hidden w-full md:block md:w-auto" id="navbar-default">
            <div className="flex flex-row">
                <MenuUlLi /> 
             </div>
          </div>
        </div>
      </nav>
     


  
      </>
    )
}