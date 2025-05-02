/* eslint-disable prettier/prettier */
import { FaFileAlt } from "react-icons/fa";
import { ReactTyped } from "react-typed";

import { Tech } from "../Tech";
import { Button } from "../Button";

export function HomeEu() {
  return (
    <div className="md:flex justify-center items-center md:w-[60rem] mr-10 sm:mr-20">
      <div className="md:mt-6">
        <h1 className="text-[#ccd6f6] mt-1 font-roboto font-bold md:text-3xl">
          Olá! Me chamo Marcos Porto e sou{" "}
          <ReactTyped
            className="text-[#64ffda]"
            strings={[
              "Desenvolvedor Full Stack.",
              "Apaixonado por tecnologia.",
            ]}
            typeSpeed={50}
            backSpeed={30}
            loop
          />
        </h1>

        <p className="text-[#ccd6f6] md:text-xl uppercase md:font-medium italic">
          Este é meu website e portfólio profissional.
        </p>

        <p className="md:text-base text-[#ccd6f6] font-roboto text-justify mr-3 mt-6">
          Apaixonado por resolver problemas com código, estou em busca de uma
          oportunidade como Desenvolvedor Júnior, onde eu possa crescer
          profissionalmente, contribuir com projetos de qualidade e continuar
          evoluindo tecnicamente. Dedico-me ao estudo e prática das tecnologias
          mais atuais, buscando sempre unir qualidade, eficácia e um forte
          comprometimento com a entrega de resultados sólidos.
        </p>
        <div className="mt-3 md:flex justify-center items-center">
          <a href="/public/curriculo.pdf" download>
            <Button
              name="Baixar CV"
              icon={<FaFileAlt />}
              className="w-48 h-12 font-bold text-lg"
            />
          </a>
        </div>

        <hr className="mt-6 max-h-4 opacity-70" />
        <Tech />
      </div>
    </div>
  );
}
