/* eslint-disable prettier/prettier */
import Eu from "../../assets/marcos.png";
import "./styles.css";

export function SobreMim() {
  return (
    <div>
      <h1
        id="sobre-mim"
        className="text-[#64ffda] mt-8 font-roboto font-bold uppercase object-center text-center md:text-3xl "
      >
        Sobre mim
      </h1>

      <div className="mt-5 md:flex flex-row justify-center items-center gap-32">
        <div className="md:w-[40rem] md:mt-6 md:ml-20">
          <p className="ml-4 text-sm md:text-sm font-roboto font-semibold text-[#ccd6f6] text-justify mr-4">
            Olá, sou Marcos Antonio Porto Matos, nascido em Vitória da
            Conquista, Bahia, no ano de 2000. Atualmente, aos 25 anos, sou filho
            de Dona Edeildes Pereira Porto, uma dedicada dona de casa, e do
            Senhor Jozimiro de Oliveira Matos, e de um motorista de ônibus.
            Iniciei minha jornada acadêmica no CETEP, onde concluí o ensino
            médio integrado ao técnico de Informática. Logo após, ingressei no
            curso de Sistemas de Informação, onde atualmente estou no 8º
            semestre. Ao longo da minha trajetória como desenvolvedor na UESB,
            tive a oportunidade de atuar no desenvolvimento, manutenção e
            suporte de sistemas, utilizando tecnologias como PHP com o framework
            Twig, além de explorar bancos de dados MySQL e PostgreSQL. Durante
            esse período, também me aprofundei no uso do framework Laravel,
            ampliando minha visão sobre o desenvolvimento back-end. Nos últimos
            anos, venho me aprimorando em tecnologias modernas como ReactJS,
            TypeScript e Next.js, com foco na construção de interfaces dinâmicas
            e eficientes. Utilizo o Tailwind CSS para o design, criando
            interfaces visualmente agradáveis e intuitivas para o usuário. No
            back-end, tenho experiência com frameworks como Fastify, ExpressJS e
            Spring Boot, que me permitiram desenvolver aplicações robustas e de
            alto desempenho. Estou sempre em busca de novos desafios que me
            permitam crescer profissionalmente. Acredito no impacto da
            tecnologia no mundo e estou comprometido em contribuir
            significativamente para o campo da tecnologia da informação, criando
            soluções de valor e sempre evoluindo.
          </p>
        </div>

        <div className="">
          <img
            className="ml-10 md:w-full md:h-full max-w-xs object-center rounded-md"
            src={Eu}
            alt=""
          />
        </div>
      </div>
    </div>
  );
}
