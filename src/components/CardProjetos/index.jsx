import Habit from '../../assets/Habit.png'
import Marvel from '../../assets/Marvel.png'
import Rocketflix from '../../assets/Rocketflix.png'
import microservico from '../../assets/microservico.png'
import sports from '../../assets/sports.png'
import lista_presenca from '../../assets/lista_presenca.png'

export function CardProjetos(){
    return(
        <>
        <div class="md:rounded-lg md:shadow-lg bg-[#64ffda] md:w-96">
        <a href="https://github.com/Marqu1nhosp/habits">
          <img class="rounded-t-lg hover:scale-110 transition duration-300 ease-in-out" src={Habit} alt=""/>
        </a>
        <div class="p-6">
          <h5 class="text-gray-900 text-xl font-roboto mb-2">Projeto Habits</h5>
          <p class="text-gray-700 text-base font-roboto mb-4">
          Esse projeto foi desenvolvido com as seguintes tecnologias: TypeScript, React, Node.js, Vite, tailwindcss, Radix UI, Vitest, PostgreSQL, PrismaORM
          </p>
          <a href="https://github.com/Marqu1nhosp/habits">
          <button type="button" class=" inline-block px-6 py-2.5 bg-blue-700 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-background_marcos hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Ver projeto</button>
          </a>
        </div>
      </div>

      <div class="rounded-lg shadow-lg bg-[#64ffda] md:w-96">
        <a href="https://github.com/Marqu1nhosp/api-da-marvel-react">
          <img class="rounded-t-lg hover:scale-110 transition duration-300 ease-in-out" src={Marvel} alt=""/>
        </a>
        <div class="p-6">
          <h5 class="text-gray-900 text-xl font-roboto mb-2">Projeto Consumindo API da Marvel</h5>
          <p class="text-gray-700 font-roboto text-base mb-4">
          Esse projeto foi desenvolvido com as seguintes tecnologias: TypeScript, React, Node.js e consumindo API da Marvel utilizando.
          </p>
          <a href="https://github.com/Marqu1nhosp/api-da-marvel-react">
          <button type="button" class=" inline-block px-6 py-2.5 bg-blue-700 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-background_marcos hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Ver projeto</button>
          </a>
        </div>
      </div>

      <div class="rounded-lg shadow-lg bg-[#64ffda] md:w-96">
        <a href="https://github.com/Marqu1nhosp/rocketflix">
          <img class="rounded-t-lg hover:scale-110 transition duration-300 ease-in-out" src={Rocketflix} alt=""/>
        </a>
        <div class="p-6">
          <h5 class="text-gray-900 text-xl font-roboto mb-2">Rocketflix</h5>
          <p class="text-gray-700 font-roboto text-base mb-4">
           Esse projeto foi desenvolvido com as seguintes tecnologias: React e consumindo API do The Movie DB.
          </p>
          <a href="https://github.com/Marqu1nhosp/rocketflix">
          <button type="button" class=" inline-block px-6 py-2.5 bg-blue-700 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-background_marcos hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Ver projeto</button>
          </a>
        </div>
      </div>

      <div class="rounded-lg shadow-lg bg-[#64ffda] md:w-96">
        <a href="https://github.com/Marqu1nhosp/microservice-notification">
          <img class="rounded-t-lg hover:scale-110 transition duration-300 ease-in-out" src={microservico} alt=""/>
        </a>
        <div class="p-6">
          <h5 class="text-gray-900 text-xl font-medium mb-2">Back-end: Microsserviço de notificações</h5>
          <p class="text-gray-700 text-base mb-4">
          Estudando/desenvolvendo microsserviço escalável com as seguintes tecnologias: Node.js, NestJS, Prisma e TypeScript.
          </p>
          <a href="https://github.com/Marqu1nhosp/microservice-notification">
          <button type="button" class=" inline-block px-6 py-2.5 bg-blue-700 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-background_marcos hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Ver projeto</button>
          </a>
        </div>
      </div>

      <div class="rounded-lg shadow-lg bg-[#64ffda] md:w-96">
        <a href="https://github.com/Marqu1nhosp/nlw-esports">
          <img class="rounded-t-lg hover:scale-110 transition duration-300 ease-in-out" src={sports} alt=""/>
        </a>
        <div class="p-6">
          <h5 class="text-gray-900 text-xl font-medium mb-2">NLW-Sports</h5>
          <p class="text-gray-700 text-base mb-4">
          Esse projeto foi desenvolvido com as seguintes tecnologias: TypeScript, React, Node.js, Vite, tailwindcss, Radix UI, Expo, Vitest, PostgreSQL, PrismaORM
          </p>
          <a href="https://github.com/Marqu1nhosp/nlw-esports">
          <button type="button" class=" inline-block px-6 py-2.5 bg-blue-700 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-background_marcos hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Ver projeto</button>
          </a>
        </div>
      </div>

      <div class="rounded-lg shadow-lg bg-[#64ffda] md:w-96">
        <a href="https://github.com/Marqu1nhosp/nlw-esports">
          <img class="rounded-t-lg hover:scale-110 transition duration-300 ease-in-out" src={lista_presenca} alt=""/>
        </a>
        <div class="p-6">
          <h5 class="text-gray-900 text-xl font-medium mb-2">Lista de Presença</h5>
          <p class="text-gray-700 text-base mb-4">
          Lista de presença utilizando: React, typescript e consumindo api do github.
          </p>
          <a href="https://github.com/Marqu1nhosp/lista-de-presenca">
          <button type="button" class=" inline-block px-6 py-2.5 bg-blue-700 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-background_marcos hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Ver projeto</button>
          </a>
        </div>
      </div>
      </>
    )
}