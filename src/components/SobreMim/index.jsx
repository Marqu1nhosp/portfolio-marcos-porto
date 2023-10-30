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

      <div className="mt-5 md:flex justify-around">
        <div className="md:w-2/5 md:mt-6 md:ml-20">
          <p className="ml-4 md:text-lg font-roboto font-semibold text-white text-justify mr-4 ">
            Nasci em Vitória da Conquista, Bahia, no ano de 2000, atualmente
            tenho 23 anos, filho de uma Dona de Casa e Motorista de Ônibus, Dona
            Edeildes Pereira Porto e Senhor Jozimiro de Oliveira Matos.
          </p>
          <p className="ml-4 md:text-lg font-roboto font-semibold text-white text-justify mr-4">
            Começei a estudar no CETEP, onde terminei meu ensino médio integrado
            ao técnico de Informática, logo em seguida me ingressei no curso de
            Sistemas de Informação, atualmente estou no 8° semestre.
          </p>
          <p className="ml-4 md:text-lg font-roboto font-semibold text-white text-justify mr-4">
            Já atuei como programador na UESB, atividades de desenvolvimento,
            manutenção e suporte de sistemas, em PHP, com framework twig e com
            banco de dados MySQL e PostgreSQL, durante esse tempo, tive um pouco
            de contato com o framework Laravel.
          </p>
        </div>

        <div className="">
          <img
            className="ml-10 md:w-full md:h-full max-w-xs object-center rounded-md "
            src={Eu}
            alt=""
          />
        </div>
      </div>
    </div>
  )
}
