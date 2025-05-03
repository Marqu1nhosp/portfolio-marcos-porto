/* eslint-disable prettier/prettier */
import habit from "../assets/Habit.png";
import marvel from "../assets/Marvel.png";
import microservico from "../assets/microservico.png";
import sports from "../assets/sports.png";
import listaPresenca from "../assets/lista_presenca.png";
import letmeask from "../assets/letmeask.png";
import feed from "../assets/feed.png";
import pomodoro from "../assets/pomodoro.png";
import exerciseIt from "../assets/exerciseit.png";
import finApi from "../assets/finApi.png";
import dtMoney from "../assets/dtMoney.png";
import goodBlood from "../assets/goodBlood.png";
import igniteCall from "../assets/igniteCall.png";
import bmi from "../assets/bmi.png";
import todolist from "../assets/todolist.png";
import optionsOnScreen from "../assets/optionsOnScreen.png";
import pixGenerator from "../assets/pixGenerator.png";
import notes from "../assets/notes.png";
import apiProducts from "../assets/api-products.png";
import park from "../assets/park.png";
import leafletApp from "../assets/leaflet-app.png";
import apiLeaflet from "../assets/api-leaflet.png";

export const projects = [
  {
    title: "Api de Gestão de Produtos",
    descriptionTechnologies:
      "Tecnologias utilizadas: Spring Boot 3, Spring Security, JWT, Testes E2E, Spring Data JPA, Jakarta Bean Validation, Swagger/OpenAPI 3, ModelMapper e WebTestClient.",
    projectIdeia:
      "API para gestão de produtos com operações de CRUD para categorias, produtos, estoques e usuários. Esta API foi desenvolvida utilizando o Spring Framework.",
    image: apiProducts,
    githubLink: "https://github.com/Marqu1nhosp/api-products",
  },
  {
    title: "Api de Gestão de estacionamentos de veículos",
    descriptionTechnologies:
      "Tecnologias utilizadas: Spring Boot 3, Spring Security, JWT, Testes E2E, Spring Data JPA, Jakarta Bean Validation, Swagger/OpenAPI 3, JasperReports, JasperSoft Studio, ModelMapper e WebTestClient.",
    projectIdeia:
      "API para gerenciamento de estacionamento de veículos, incluindo controle de entradas e saídas, vagas disponíveis, tipos de veículos e cálculo automatizado de tarifas.",
    image: park,
    githubLink: "https://github.com/Marqu1nhosp/api-rest-park",
  },
  {
    title: "Front-End: Leaflet Polygon – Gerenciamento de Estabelecimentos",
    descriptionTechnologies:
      "Tecnologias utilizadas: react, tailwindcss, typescript, axios, leaflet, react-flet., toaster, zod, react-hook-form, date-fns, axios e phosphor-react.",
    projectIdeia:
      "Este é um aplicativo de gerenciamento de estabelecimentos que permite aos usuários se cadastrar e se autenticar na aplicação. Criar, visualizar e editar Estabelecimentos em um mapa interativo. Os usuários podem adicionar novos locais, editar os existentes e visualizar uma lista dos locais cadastrados.",
    image: leafletApp,
    githubLink: "https://github.com/Marqu1nhosp/leafletPolygon-react-app",
  },
  {
    title:
      "Back-end: API Leaflet - API construída com o framework Fastify para gerenciar estabelecimentos em um mapa Leaflet.",
    descriptionTechnologies:
      "Tecnologias utilizadas: Fastify, Fastify JWT, Fastify CORS typescript, zod, prisma e mysql.",
    projectIdeia:
      "Esta é uma API construída com o framework Fastify para gerenciar estabelecimentos em um mapa Leaflet.",
    image: apiLeaflet,
    githubLink: "https://github.com/Marqu1nhosp/api-leafletPolygon",
  },
  {
    title: "Notes App",
    descriptionTechnologies:
      "Tecnologias utilizadas: React, Typescript, tailwindcss, radix, date-fns, sonner, localStorage e API Speech Recognition.",
    projectIdeia:
      "Esse app permite aos usuários gravar notas por voz, simplificando ainda mais o processo de captura de pensamentos e ideias ou por entrada do teclado, utilizando apenas texto.",
    image: notes,
    githubLink: "https://github.com/Marqu1nhosp/notes-app",
  },
  {
    title: "Pix Generator App",
    descriptionTechnologies:
      "Tecnologias utilizadas no front-end: Next, React, Typescript, tailwindcss, axios, next-auth, react-hook-form, zod, react-imask, react-qrcode-pix, sonner, radix e uuid." +
      " Tecnologias utilizadas no back-end: Node, Fastify, Typescript, knex, zod, sqlite3, supertest, fastify/cors, fastify/multipart e fastify/static.",
    projectIdeia:
      "Este é projeto full stack, com uma interface simples e intuitiva, meu aplicativo possibilita que os comerciantes se registrem, acessem suas contas e gerem QR Codes Pix de maneira ágil e eficaz. Além disso, oferecemos relatórios de transações simplificados para facilitar a gestão financeira.",
    image: pixGenerator,
    githubLink: "https://github.com/Marqu1nhosp/pix-generator-app",
  },
  {
    title: "Options On Screen",
    descriptionTechnologies:
      "Esse projeto foi desenvolvido com as seguintes tecnologias: React, TypeScript, Tailwind CSS, Next.js, Phosphor React, Axios e integração com a API The Movie Database.",
    projectIdeia:
      "O aplicativo tem a funcionalidade de encontrar aleatoriamente um filme para o usuário assistir. Ele também inclui a opção de alternar entre temas claro e escuro.",
    image: optionsOnScreen,
    githubLink: "https://github.com/Marqu1nhosp/options-on-screen-app",
  },
  {
    title: "Lista de Tarefas",
    descriptionTechnologies:
      "Esse projeto foi desenvolvido com as seguintes tecnologias: nextJs, react, typescript. tailwindcss, react hook form, zod e context api.",
    projectIdeia:
      "Uma lista de tarefas é uma lista que contém o que você precisa concluir. Com ela, tudo fica anotado em um só lugar para você não esquecer de nada importante. O aplicativo oferece uma interface intuitiva para adicionar, visualizar e excluir tarefas. As tarefas podem ser marcadas como concluídas, proporcionando uma maneira eficaz de rastrear o progresso.",
    image: todolist,
    githubLink: "https://github.com/Marqu1nhosp/to-do-list-app",
  },
  {
    title: "Imc App",
    descriptionTechnologies:
      "Esse projeto foi desenvolvido com as seguintes tecnologias: TypeScript, React, nextJS, react-hook-form, tailwindCSS, Context API e zod.",
    projectIdeia:
      "Desenvolvi essa app onde calcula o índice de massa corporal, é uma app bem simples, mas que me agregou muito conhecimento no mundo do NextJS/React com regra de negócios com typescript, com o modelo de SPA (Single Page Application), onde eu consegui implementar um formulário avançando com react hook form e zod, utilizando Context API para compartilhar dados entre componentes, onde entendi melhor o conceito e utilizei o Tailwind CSS.",
    image: bmi,
    githubLink: "https://github.com/Marqu1nhosp/bmi-app",
  },
  {
    title: "Exercise It",
    descriptionTechnologies:
      "Esse projeto foi desenvolvido com as seguintes tecnologias: TypeScript, React e NextJS. É um app para lembrar o usuário de fazer exercícios, enquanto estiver na frente do computador. Contém Up de level, para cada exercício finalizado.",
    projectIdeia:
      "É um app para lembrar o usuário de fazer exercícios, enquanto estiver na frente do computador. Contém Up de level, para cada exercício finalizado.",
    image: exerciseIt,
    githubLink: "https://github.com/Marqu1nhosp/exercise-it",
  },
  {
    title: "GoodBlood",
    descriptionTechnologies:
      "Tecnologias utilizadas: react, tailwindcss, axios, json-server, zod, hookform/resolvers, uuid, date-fns, Radix UI, react-datepicker, react-hook-form, react-imask, react-router-dom e phosphor-icons/react.",
    image: goodBlood,
    projectIdeia:
      "Sistema de doação de sangue para o projeto de Tópicos Especiais da faculdade de Sistemas de Informação.",
    githubLink: "https://github.com/Marqu1nhosp/goodblood",
  },
  {
    title: "Fin Api",
    descriptionTechnologies:
      "Tecnologias utilizadas: react, tailwindcss, axios, json-server, zod, hookform/resolvers, uuid, date-fns, Radix UI, react-datepicker, react-hook-form, react-imask, react-router-dom e phosphor-icons/react.",
    projectIdeia:
      "Esse projeto foi desenvolvido com as seguintes tecnologias: NodeJS e express.",
    image: finApi,
    githubLink: "https://github.com/Marqu1nhosp/goodblood",
  },
  {
    title: "Ignite Call",
    descriptionTechnologies:
      "Tecnologias utilizadas: TypeScript, React, prisma, next, next-auth, react-dom, react-hook-form, axios, dayjs e zod.",
    projectIdeia:
      "É um app para conectar seu calendário e permitir que as pessoas marquem agendamentos no seu tempo livre.",
    image: igniteCall,
    githubLink: "https://github.com/Marqu1nhosp/ignitecall",
  },
  {
    title: "DT Money",
    descriptionTechnologies:
      "Tecnologias utilizadas: Typescript, react, react-dom, react-hook-form, styled-components, axios e json-server.",
    projectIdeia:
      "DT Money é um app para ter um controle financeiro, onde você pode fazer uma busca pelo o item desejado.",
    image: dtMoney,
    githubLink: "https://github.com/Marqu1nhosp/dt-money",
  },
  {
    title: "Habits",
    descriptionTechnologies:
      "Esse projeto foi desenvolvido com as seguintes tecnologias: TypeScript, React, Node.js, Vite, tailwindcss, Radix UI, Vitest, PostgreSQL, PrismaORM.",
    projectIdeia:
      "Projeto para cadastrar hábitos, estimular metas no seu dia-a-dia e ver quantas desses hábitos conseguiu fazer.",
    image: habit,
    githubLink: "https://github.com/Marqu1nhosp/habits",
  },
  {
    title: "Pomodoro Timer",
    descriptionTechnologies:
      "Esse projeto foi desenvolvido com as seguintes tecnologias: TypeScript, React, react-router-dom, styled-components e react-hook-form.",
    projectIdeia:
      "Foi desenvolvido com base na técnica de Pomodoro, essa técnica é forma de otimizar o tempo de estudos e tarefas geralmente é voltada para pessoas procrastinadoras, ou seja, que têm tendência a adiar suas atividades.",
    image: pomodoro,
    githubLink: "https://github.com/Marqu1nhosp/pomodoro-timer",
  },
  {
    title: "Feed",
    descriptionTechnologies:
      "Esse projeto foi desenvolvido com as seguintes tecnologias: React, TypeScript e css-modules.",
    projectIdeia:
      "Projeto para simular um Feed de uma rede social, onde tem as funcionalidades de postar, deletar e comentar no feed.",
    image: feed,
    githubLink: "https://github.com/Marqu1nhosp/feed-ts",
  },
  {
    title: "Back-end: Microsserviço de notificações",
    descriptionTechnologies:
      "Estudando/desenvolvendo microsserviço escalável com as seguintes tecnologias: Node.js, NestJS, Prisma e TypeScript.",
    projectIdeia: "Microsserviço escalável de notificações.",
    image: microservico,
    githubLink: "https://github.com/Marqu1nhosp/microservice-notification",
  },
  {
    title: "NLW-Sports",
    descriptionTechnologies:
      "Esse projeto foi desenvolvido com as seguintes tecnologias: TypeScript, React, Node.js, Vite, tailwindcss, Radix UI, Expo, Vitest, PostgreSQL, PrismaORM.",
    projectIdeia:
      "Projeto criado para encontrar duo, caso queira alguém para jogar.",
    image: sports,
    githubLink: "https://github.com/Marqu1nhosp/nlw-esports",
  },
  {
    title: "Lista de Presença",
    descriptionTechnologies:
      "Lista de presença utilizando: React, typescript e consumindo api do github.",
    projectIdeia:
      "Lista de presença para facilitar a identificaçao das pessoas, comprovar a presença dos envolvidos, digitando o nome, na qual irá trazer o horário.",
    image: listaPresenca,
    githubLink: "https://github.com/Marqu1nhosp/lista-de-presenca",
  },
  {
    title: "Let me ask",
    descriptionTechnologies:
      "Esse projeto foi desenvolvido com as seguintes tecnologias: React, typescript e Firabase.",
    projectIdeia:
      "Esse projeto tem um intuito de fazer login com google, criar salas de perguntas e dando ao usuário permissão para responder.",
    image: letmeask,
    githubLink: "https://github.com/Marqu1nhosp/let-me-ask",
  },
  {
    title: "Projeto Consumindo API da Marvel",
    descriptionTechnologies:
      "Esse projeto foi desenvolvido com as seguintes tecnologias: TypeScript, React, Node.js e consumindo API da Marvel.",
    projectIdeia:
      "Projeto para fins de estudo, onde da pra pesquisar o seu personagem da Marvel, trazendo foto e sua descrição.",
    image: marvel,
    githubLink: "https://github.com/Marqu1nhosp/let-me-ask",
  },
];
