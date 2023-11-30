import Eu from '../../assets/marcos.png'
import './styles.css'

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
          <p className="ml-4 md:text- font-roboto font-semibold text-white text-justify mr-4 ">
            Olá, sou Marcos Antonio Porto Matos, nascido em Vitória da
            Conquista, Bahia, no ano de 2000. Atualmente, aos 23 anos, sou filho
            de uma dedicada Dona de Casa, Dona Edeildes Pereira Porto, e do
            habilidoso Motorista de Ônibus, Senhor Jozimiro de Oliveira Matos.
          </p>
          <p className="ml-4 md:text- font-roboto font-semibold text-white text-justify mr-4">
            Iniciei minha jornada acadêmica no CETEP, onde concluí o ensino
            médio integrado ao técnico de Informática. Logo após, mergulhei no
            universo da tecnologia ao ingressar no curso de Sistemas de
            Informação, no qual atualmente estou no 8º semestre.
          </p>
          <p className="ml-4 md:text- font-roboto font-semibold text-white text-justify mr-4">
            Minha trajetória como desenvolvedor na UESB foi marcada por
            experiências significativas. Atuei no desenvolvimento, manutenção e
            suporte de sistemas, utilizando tecnologias como PHP com o framework
            Twig, e explorando bancos de dados MySQL e PostgreSQL. Durante esse
            período, também tive a oportunidade de aprimorar minhas habilidades
            com o framework Laravel. Além disso, venho me aprimorando em
            tecnologias modernas, como ReactJS, TypeScript e NextJS para a
            construção de interfaces dinâmicas e eficientes. Minha abordagem
            para o design é complementada pelo uso do Tailwind CSS,
            proporcionando uma experiência de usuário intuitiva e esteticamente
            agradável. No âmbito do back-end, tenho experiência com as
            frameworks Fastify e ExpressJS, proporcionando bases sólidas para o
            desenvolvimento de aplicações robustas e de alto desempenho. Minha
            jornada no mundo do NodeJS também enriqueceu minha compreensão da
            arquitetura de servidores eficientes e escaláveis. Além dos aspectos
            técnicos, busco constantemente desafios e oportunidades que
            impulsionem meu crescimento profissional. Estou entusiasmado com o
            que o futuro reserva e comprometido em contribuir significativamente
            para o campo dinâmico da tecnologia da informação.
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
  )
}
