import Habit from '../../assets/Habit.png'
import Marvel from '../../assets/Marvel.png'
import Rocketflix from '../../assets/Rocketflix.png'
import microservico from '../../assets/microservico.png'
import sports from '../../assets/sports.png'
import listaPresenca from '../../assets/lista_presenca.png'
import letmeask from '../../assets/letmeask.png'
import feed from '../../assets/feed.png'
import pomodoro from '../../assets/pomodoro.png'

export function CardProjetos() {
  return (
    <>
      <div className="mt-10 md:rounded-lg md:shadow-lg bg-[#64ffda] md:w-96">
        <a
          href="https://github.com/Marqu1nhosp/habits"
          target="_blank"
          rel="noreferrer"
        >
          <img
            className="rounded-t-lg hover:scale-110 transition duration-300 ease-in-out"
            src={Habit}
            alt=""
          />
        </a>
        <div className="p-6">
          <h5 className="text-gray-900 text-xl font-bold mb-2">
            Projeto Habits
          </h5>
          <p className="text-gray-700 text-base font-roboto mb-4">
            Esse projeto foi desenvolvido com as seguintes tecnologias:
            TypeScript, React, Node.js, Vite, tailwindcss, Radix UI, Vitest,
            PostgreSQL, PrismaORM
          </p>
          <h5 className="mt-4 text-gray-900 text-xl font-bold mb-2">
            Idéia do projeto:
          </h5>
          <p className="text-gray-700 text-base font-roboto mb-4">
            Projeto para cadastrar hábitos, estimular metas no seu dia-a-dia e
            ver quantas desses hábitos conseguiu fazer.
          </p>
          <a
            href="https://github.com/Marqu1nhosp/habits"
            target="_blank"
            rel="noreferrer"
          >
            <button
              type="button"
              className=" inline-block px-6 py-2.5 bg-blue-700 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-background_marcos hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
            >
              Ver projeto
            </button>
          </a>
        </div>
      </div>

      <div className="mt-10 rounded-lg shadow-lg bg-[#64ffda] md:w-96">
        <a
          href="https://github.com/Marqu1nhosp/pomodoro-timer"
          target="_blank"
          rel="noreferrer"
        >
          <img
            className="rounded-t-lg hover:scale-110 transition duration-300 ease-in-out"
            src={pomodoro}
            alt=""
          />
        </a>
        <div className="p-6">
          <h5 className="text-gray-900 text-xl font-bold mb-2">
            Pomodoro Timer
          </h5>
          <p className="text-gray-700 font-roboto text-base mb-4">
            Esse projeto foi desenvolvido com as seguintes tecnologias:
            TypeScript, React, react-router-dom, styled-components e
            react-hook-form.
          </p>
          <h5 className="mt-4 text-gray-900 text-xl font-bold mb-2">
            Idéia do projeto:
          </h5>
          <p className="text-gray-700 text-base font-roboto mb-4">
            Foi desenvolvido com base na técnica de Pomodoro, essa técnica é
            forma de otimizar o tempo de estudos e tarefas geralmente é voltada
            para pessoas procrastinadoras, ou seja, que têm tendência a adiar
            suas atividades.
          </p>
          <a
            href="https://github.com/Marqu1nhosp/pomodoro-timer"
            target="_blank"
            rel="noreferrer"
          >
            <button
              type="button"
              className=" inline-block px-6 py-2.5 bg-blue-700 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-background_marcos hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
            >
              Ver projeto
            </button>
          </a>
        </div>
      </div>

      <div className="mt-10 rounded-lg shadow-lg bg-[#64ffda] md:w-96">
        <a
          href="https://github.com/Marqu1nhosp/feed-ts"
          target="_blank"
          rel="noreferrer"
        >
          <img
            className="rounded-t-lg hover:scale-110 transition duration-300 ease-in-out"
            src={feed}
            alt=""
          />
        </a>
        <div className="p-6">
          <h5 className="text-gray-900 text-xl font-bold mb-2">Feed</h5>
          <p className="text-gray-700 font-roboto text-base mb-4">
            Esse projeto foi desenvolvido com as seguintes tecnologias: React,
            TypeScript e css-modules.
          </p>
          <h5 className="mt-4 text-gray-900 text-xl font-bold mb-2">
            Idéia do projeto:
          </h5>
          <p className="text-gray-700 text-base font-roboto mb-4">
            Projeto para simular um Feed de uma rede social, onde tem as
            funcionalidades de postar, deletar e comentar no feed.
          </p>
          <a
            href="https://github.com/Marqu1nhosp/feed-ts"
            target="_blank"
            rel="noreferrer"
          >
            <button
              type="button"
              className=" inline-block px-6 py-2.5 bg-blue-700 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-background_marcos hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
            >
              Ver projeto
            </button>
          </a>
        </div>
      </div>

      <div className="mt-10 rounded-lg shadow-lg bg-[#64ffda] md:w-96">
        <a
          href="https://github.com/Marqu1nhosp/microservice-notification"
          target="_blank"
          rel="noreferrer"
        >
          <img
            className="rounded-t-lg hover:scale-110 transition duration-300 ease-in-out"
            src={microservico}
            alt=""
          />
        </a>
        <div className="p-6">
          <h5 className="text-gray-900 text-xl font-bold mb-2">
            Back-end: Microsserviço de notificações
          </h5>
          <p className="text-gray-700 text-base mb-4">
            Estudando/desenvolvendo microsserviço escalável com as seguintes
            tecnologias: Node.js, NestJS, Prisma e TypeScript.
          </p>
          <h5 className="mt-4 text-gray-900 text-xl font-bold mb-2">
            Idéia do projeto:
          </h5>
          <p className="text-gray-700 text-base font-roboto mb-4">
            Microsserviço escalável de notificações.
          </p>
          <a
            href="https://github.com/Marqu1nhosp/microservice-notification"
            target="_blank"
            rel="noreferrer"
          >
            <button
              type="button"
              className=" inline-block px-6 py-2.5 bg-blue-700 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-background_marcos hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
            >
              Ver projeto
            </button>
          </a>
        </div>
      </div>

      <div className="mt-10 rounded-lg shadow-lg bg-[#64ffda] md:w-96">
        <a
          href="https://github.com/Marqu1nhosp/nlw-esports"
          target="_blank"
          rel="noreferrer"
        >
          <img
            className="rounded-t-lg hover:scale-110 transition duration-300 ease-in-out"
            src={sports}
            alt=""
          />
        </a>
        <div className="p-6">
          <h5 className="text-gray-900 md:text-xl font-bold mb-2">
            NLW-Sports
          </h5>
          <p className="text-gray-700 text-base mb-4">
            Esse projeto foi desenvolvido com as seguintes tecnologias:
            TypeScript, React, Node.js, Vite, tailwindcss, Radix UI, Expo,
            Vitest, PostgreSQL, PrismaORM
          </p>
          <h5 className="mt-4 text-gray-900 text-xl font-bold mb-2">
            Idéia do projeto:
          </h5>
          <p className="text-gray-700 text-base font-roboto mb-4">
            Projeto criado para encontrar duo, caso queira alguém para jogar.
          </p>
          <a
            href="https://github.com/Marqu1nhosp/nlw-esports"
            target="_blank"
            rel="noreferrer"
          >
            <button
              type="button"
              className=" inline-block px-6 py-2.5 bg-blue-700 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-background_marcos hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
            >
              Ver projeto
            </button>
          </a>
        </div>
      </div>

      <div className="mt-10 rounded-lg shadow-lg bg-[#64ffda] md:w-96">
        <a
          href="https://github.com/Marqu1nhosp/nlw-esports"
          target="_blank"
          rel="noreferrer"
        >
          <img
            className="rounded-t-lg hover:scale-110 transition duration-300 ease-in-out"
            src={listaPresenca}
            alt=""
          />
        </a>
        <div className="p-6">
          <h5 className="text-gray-900 text-xl font-bold mb-2">
            Lista de Presença
          </h5>
          <p className="text-gray-700 text-base mb-4">
            Lista de presença utilizando: React, typescript e consumindo api do
            github.
          </p>
          <h5 className="mt-4 text-gray-900 text-xl font-bold mb-2">
            Idéia do projeto:
          </h5>
          <p className="text-gray-700 text-base font-roboto mb-4">
            Lista de presença para facilitar a identificaçao das pessoas,
            comprovar a presença dos envolvidos, digitando o nome, na qual irá
            trazer o horário.
          </p>
          <a
            href="https://github.com/Marqu1nhosp/lista-de-presenca"
            target="_blank"
            rel="noreferrer"
          >
            <button
              type="button"
              className=" inline-block px-6 py-2.5 bg-blue-700 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-background_marcos hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
            >
              Ver projeto
            </button>
          </a>
        </div>
      </div>

      <div className="mt-10 rounded-lg shadow-lg bg-[#64ffda] md:w-96">
        <a
          href="https://github.com/Marqu1nhosp/nlw-esports"
          target="_blank"
          rel="noreferrer"
        >
          <img
            className="rounded-t-lg hover:scale-110 transition duration-300 ease-in-out"
            src={letmeask}
            alt=""
          />
        </a>
        <div className="p-6">
          <h5 className="text-gray-900 text-xl font-bold mb-2">Let me ask</h5>
          <p className="text-gray-700 text-base mb-4">
            Esse projeto foi desenvolvido com as seguintes tecnologias: React,
            typescript e Firabase.
          </p>
          <h5 className="mt-4 text-gray-900 text-xl font-bold mb-2">
            Idéia do projeto:
          </h5>
          <p className="text-gray-700 text-base font-roboto mb-4">
            Esse projeto tem um intuito de fazer login com google, criar salas
            de perguntas e dando ao usuário permissão para responder.
          </p>
          <a
            href="https://github.com/Marqu1nhosp/lista-de-presenca"
            target="_blank"
            rel="noreferrer"
          >
            <button
              type="button"
              className=" inline-block px-6 py-2.5 bg-blue-700 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-background_marcos hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
            >
              Ver projeto
            </button>
          </a>
        </div>
      </div>

      <div className="mt-10 rounded-lg shadow-lg bg-[#64ffda] md:w-96">
        <a
          href="https://github.com/Marqu1nhosp/api-da-marvel-react"
          target="_blank"
          rel="noreferrer"
        >
          <img
            className="rounded-t-lg hover:scale-110 transition duration-300 ease-in-out"
            src={Marvel}
            alt=""
          />
        </a>
        <div className="p-6">
          <h5 className="text-gray-900 text-xl font-bold mb-2">
            Projeto Consumindo API da Marvel
          </h5>
          <p className="text-gray-700 font-roboto text-base mb-4">
            Esse projeto foi desenvolvido com as seguintes tecnologias:
            TypeScript, React, Node.js e consumindo API da Marvel.
          </p>
          <h5 className="mt-4 text-gray-900 text-xl font-bold mb-2">
            Idéia do projeto:
          </h5>
          <p className="text-gray-700 text-base font-roboto mb-4">
            Projeto para fins de estudo, onde da pra pesquisar o seu personagem
            da Marvel, trazendo foto e sua descrição consumindo api da Marvel.
          </p>
          <a
            href="https://github.com/Marqu1nhosp/api-da-marvel-react"
            target="_blank"
            rel="noreferrer"
          >
            <button
              type="button"
              className=" inline-block px-6 py-2.5 bg-blue-700 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-background_marcos hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
            >
              Ver projeto
            </button>
          </a>
        </div>
      </div>

      <div className="mt-10 rounded-lg shadow-lg bg-[#64ffda] md:w-96">
        <a
          href="https://github.com/Marqu1nhosp/rocketflix"
          target="_blank"
          rel="noreferrer"
        >
          <img
            className="rounded-t-lg hover:scale-110 transition duration-300 ease-in-out"
            src={Rocketflix}
            alt=""
          />
        </a>
        <div className="p-6">
          <h5 className="text-gray-900 text-xl font-bold mb-2">Rocketflix</h5>
          <p className="text-gray-700 font-roboto text-base mb-4">
            Esse projeto foi desenvolvido com as seguintes tecnologias: React e
            consumindo API do The Movie DB.
          </p>
          <h5 className="mt-4 text-gray-900 text-xl font-bold mb-2">
            Idéia do projeto:
          </h5>
          <p className="text-gray-700 text-base font-roboto mb-4">
            O projeto foi desenvolvido para ajudar o usuário, caso o mesmo não
            tenha idéia de filme para assistir.
          </p>
          <a
            href="https://github.com/Marqu1nhosp/rocketflix"
            target="_blank"
            rel="noreferrer"
          >
            <button
              type="button"
              className=" inline-block px-6 py-2.5 bg-blue-700 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-background_marcos hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
            >
              Ver projeto
            </button>
          </a>
        </div>
      </div>
    </>
  )
}
