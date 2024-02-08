import habit from '../../assets/Habit.png'
import marvel from '../../assets/Marvel.png'
import microservico from '../../assets/microservico.png'
import sports from '../../assets/sports.png'
import listaPresenca from '../../assets/lista_presenca.png'
import letmeask from '../../assets/letmeask.png'
import feed from '../../assets/feed.png'
import pomodoro from '../../assets/pomodoro.png'
import exerciseIt from '../../assets/exerciseit.png'
import finApi from '../../assets/finApi.png'
import dtMoney from '../../assets/dtMoney.png'
import goodBlood from '../../assets/goodBlood.png'
import igniteCall from '../../assets/igniteCall.png'
import bmi from '../../assets/bmi.png'
import todolist from '../../assets/todolist.png'
import optionsOnScreen from '../../assets/optionsOnScreen.png'

const projects = [
  {
    title: 'Options On Screen',
    descriptionTechnologies:
      'Esse projeto foi desenvolvido com as seguintes tecnologias: React, TypeScript, Tailwind CSS, Next.js, Phosphor React, Axios e integração com a API The Movie Database.',
    projectIdeia:
      'O aplicativo tem a funcionalidade de encontrar aleatoriamente um filme para o usuário assistir. Ele também inclui a opção de alternar entre temas claro e escuro.',
    image: optionsOnScreen,
    githubLink: 'https://github.com/Marqu1nhosp/options-on-screen-app',
  },
  {
    title: 'Lista de Tarefas',
    descriptionTechnologies:
      'Esse projeto foi desenvolvido com as seguintes tecnologias: nextJs, react, typescript. tailwindcss, react hook form, zod e context api.',
    projectIdeia:
      'Uma lista de tarefas é uma lista que contém o que você precisa concluir. Com ela, tudo fica anotado em um só lugar para você não esquecer de nada importante. O aplicativo oferece uma interface intuitiva para adicionar, visualizar e excluir tarefas. As tarefas podem ser marcadas como concluídas, proporcionando uma maneira eficaz de rastrear o progresso.',
    image: todolist,
    githubLink: 'https://github.com/Marqu1nhosp/to-do-list-app',
  },
  {
    title: 'Imc App',
    descriptionTechnologies:
      'Esse projeto foi desenvolvido com as seguintes tecnologias: TypeScript, React, nextJS, react-hook-form, tailwindCSS, Context API e zod.',
    projectIdeia:
      'Desenvolvi essa app onde calcula o índice de massa corporal, é uma app bem simples, mas que me agregou muito conhecimento no mundo do NextJS/React com regra de negócios com typescript, com o modelo de SPA (Single Page Application), onde eu consegui implementar um formulário avançando com react hook form e zod, utilizando Context API para compartilhar dados entre componentes, onde entendi melhor o conceito e utilizei o Tailwind CSS.',
    image: bmi,
    githubLink: 'https://github.com/Marqu1nhosp/bmi-app',
  },
  {
    title: 'Exercise It',
    descriptionTechnologies:
      'Esse projeto foi desenvolvido com as seguintes tecnologias: TypeScript, React e NextJS. É um app para lembrar o usuário de fazer exercícios, enquanto estiver na frente do computador. Contém Up de level, para cada exercício finalizado.',
    projectIdeia:
      'É um app para lembrar o usuário de fazer exercícios, enquanto estiver na frente do computador. Contém Up de level, para cada exercício finalizado.',
    image: exerciseIt,
    githubLink: 'https://github.com/Marqu1nhosp/exercise-it',
  },
  {
    title: 'GoodBlood',
    descriptionTechnologies:
      'Tecnologias utilizadas: react, tailwindcss, axios, json-server, zod, hookform/resolvers, uuid, date-fns, Radix UI, react-datepicker, react-hook-form, react-imask, react-router-dom e phosphor-icons/react.',
    image: goodBlood,
    projectIdeia:
      'Sistema de doação de sangue para o projeto de Tópicos Especiais da faculdade de Sistemas de Informação.',
    githubLink: 'https://github.com/Marqu1nhosp/goodblood',
  },
  {
    title: 'Fin Api',
    descriptionTechnologies:
      'Tecnologias utilizadas: react, tailwindcss, axios, json-server, zod, hookform/resolvers, uuid, date-fns, Radix UI, react-datepicker, react-hook-form, react-imask, react-router-dom e phosphor-icons/react.',
    projectIdeia:
      'Esse projeto foi desenvolvido com as seguintes tecnologias: NodeJS e express.',
    image: finApi,
    githubLink: 'https://github.com/Marqu1nhosp/goodblood',
  },
  {
    title: 'Ignite Call',
    descriptionTechnologies:
      'Tecnologias utilizadas: TypeScript, React, prisma, next, next-auth, react-dom, react-hook-form, axios, dayjs e zod.',
    projectIdeia:
      'É um app para conectar seu calendário e permitir que as pessoas marquem agendamentos no seu tempo livre.',
    image: igniteCall,
    githubLink: 'https://github.com/Marqu1nhosp/ignitecall',
  },
  {
    title: 'DT Money',
    descriptionTechnologies:
      'Tecnologias utilizadas: Typescript, react, react-dom, react-hook-form, styled-components, axios e json-server.',
    projectIdeia:
      'DT Money é um app para ter um controle financeiro, onde você pode fazer uma busca pelo o item desejado.',
    image: dtMoney,
    githubLink: 'https://github.com/Marqu1nhosp/dt-money',
  },
  {
    title: 'Habits',
    descriptionTechnologies:
      'Esse projeto foi desenvolvido com as seguintes tecnologias: TypeScript, React, Node.js, Vite, tailwindcss, Radix UI, Vitest, PostgreSQL, PrismaORM.',
    projectIdeia:
      'Projeto para cadastrar hábitos, estimular metas no seu dia-a-dia e ver quantas desses hábitos conseguiu fazer.',
    image: habit,
    githubLink: 'https://github.com/Marqu1nhosp/habits',
  },
  {
    title: 'Pomodoro Timer',
    descriptionTechnologies:
      'Esse projeto foi desenvolvido com as seguintes tecnologias: TypeScript, React, react-router-dom, styled-components e react-hook-form.',
    projectIdeia:
      'Foi desenvolvido com base na técnica de Pomodoro, essa técnica é forma de otimizar o tempo de estudos e tarefas geralmente é voltada para pessoas procrastinadoras, ou seja, que têm tendência a adiar suas atividades.',
    image: pomodoro,
    githubLink: 'https://github.com/Marqu1nhosp/pomodoro-timer',
  },
  {
    title: 'Feed',
    descriptionTechnologies:
      'Esse projeto foi desenvolvido com as seguintes tecnologias: React, TypeScript e css-modules.',
    projectIdeia:
      'Projeto para simular um Feed de uma rede social, onde tem as funcionalidades de postar, deletar e comentar no feed.',
    image: feed,
    githubLink: 'https://github.com/Marqu1nhosp/feed-ts',
  },
  {
    title: 'Back-end: Microsserviço de notificações',
    descriptionTechnologies:
      'Estudando/desenvolvendo microsserviço escalável com as seguintes tecnologias: Node.js, NestJS, Prisma e TypeScript.',
    projectIdeia: 'Microsserviço escalável de notificações.',
    image: microservico,
    githubLink: 'https://github.com/Marqu1nhosp/microservice-notification',
  },
  {
    title: 'NLW-Sports',
    descriptionTechnologies:
      'Esse projeto foi desenvolvido com as seguintes tecnologias: TypeScript, React, Node.js, Vite, tailwindcss, Radix UI, Expo, Vitest, PostgreSQL, PrismaORM.',
    projectIdeia:
      'Projeto criado para encontrar duo, caso queira alguém para jogar.',
    image: sports,
    githubLink: 'https://github.com/Marqu1nhosp/nlw-esports',
  },
  {
    title: 'Lista de Presença',
    descriptionTechnologies:
      'Lista de presença utilizando: React, typescript e consumindo api do github.',
    projectIdeia:
      'Lista de presença para facilitar a identificaçao das pessoas, comprovar a presença dos envolvidos, digitando o nome, na qual irá trazer o horário.',
    image: listaPresenca,
    githubLink: 'https://github.com/Marqu1nhosp/lista-de-presenca',
  },
  {
    title: 'Let me ask',
    descriptionTechnologies:
      'Esse projeto foi desenvolvido com as seguintes tecnologias: React, typescript e Firabase.',
    projectIdeia:
      'Esse projeto tem um intuito de fazer login com google, criar salas de perguntas e dando ao usuário permissão para responder.',
    image: letmeask,
    githubLink: 'https://github.com/Marqu1nhosp/let-me-ask',
  },
  {
    title: 'Projeto Consumindo API da Marvel',
    descriptionTechnologies:
      'Esse projeto foi desenvolvido com as seguintes tecnologias: TypeScript, React, Node.js e consumindo API da Marvel.',
    projectIdeia:
      'Projeto para fins de estudo, onde da pra pesquisar o seu personagem da Marvel, trazendo foto e sua descrição.',
    image: marvel,
    githubLink: 'https://github.com/Marqu1nhosp/let-me-ask',
  },
]

export function CardProjetos() {
  return (
    <>
      {projects.map((project, index) => (
        <div
          key={index}
          className="rounded-md mt-10 px-0 md:rounded-lg md:shadow-lg bg-[#64ffda] md:w-96"
        >
          <a href={project.githubLink} target="_blank" rel="noreferrer">
            <img
              className="rounded-t-lg hover:scale-110 transition duration-300 ease-in-out"
              src={project.image}
              alt={project.title}
            />
          </a>
          <div className="p-6">
            <h5 className="text-gray-900 text-xl font-bold mb-2">
              {project.title}
            </h5>
            <p className="text-gray-700 text-base font-roboto mb-4">
              {project.descriptionTechnologies}
            </p>
            <h5 className="mt-4 text-gray-900 text-xl font-bold mb-2">
              Idéia do projeto:
            </h5>
            <p className="text-gray-700 text-base font-roboto mb-4">
              {project.projectIdeia}
            </p>
            <a href={project.githubLink} target="_blank" rel="noreferrer">
              <button
                type="button"
                className=" inline-block px-6 py-2.5 bg-blue-700 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-background_marcos hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
              >
                Ver projeto
              </button>
            </a>
          </div>
        </div>
      ))}
    </>
  )
}
