import { useState } from "react";
import { ExternalLink, Github } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import apiProducts from "@/assets/api-products.png";
import park from "@/assets/park.png";
import pixGenerator from "@/assets/pixGenerator.png";
import todolist from "@/assets/todolist.png";
import leafletApp from "@/assets/leaflet-app.png";
import apiLeaflet from "@/assets/api-leaflet.png";
import notes from "@/assets/notes.png";
import optionsOnScreen from "@/assets/optionsOnScreen.png";
import dtMoney from "@/assets/dtMoney.png";
import pomodoro from "@/assets/pomodoro.png";

type Project = {
  title: string;
  description: string;
  techs: string[];
  image: string;
  github: string;
  deploy: string;
};

const projects: Project[] = [
  {
    title: "Api de Gestão de Produtos",
    description:
      "API para gestão de produtos com operações de CRUD para categorias, produtos, estoques e usuários. Esta API foi desenvolvida utilizando o Spring Framework.",
    techs: ["Spring Boot 3", "Spring Security,", "JWT", "Spring Data JPA", "Testes E2E", "Jakarta Bean Validation", " Swagger/OpenAPI 3", "ModelMapper", "MySQL"],
    image: apiProducts,
    github: "https://github.com/Marqu1nhosp/api-products",
    deploy: "https://example.com",
  },
  {
    title: "API de Gestão de estacionamentos de veículos",
    description:
      "API para gerenciamento de estacionamento de veículos, incluindo controle de entradas e saídas, vagas disponíveis, tipos de veículos e cálculo automatizado de tarifas.",
    techs: ["Spring Boot 3", "Spring Security,", "JWT", "Spring Data JPA", "Jakarta Bean Validation", " Swagger/OpenAPI 3", "ModelMapper", "MySQL"],
    image: park,
    github: "https://github.com/Marqu1nhosp/api-rest-park",
    deploy: "https://example.com",
  },
  {
    title: "Front-End: Leaflet Polygon – Gerenciamento de Estabelecimentos",
    description:
      "Este é um aplicativo de gerenciamento de estabelecimentos que permite aos usuários se cadastrar e se autenticar na aplicação. Criar, visualizar e editar Estabelecimentos em um mapa interativo. Os usuários podem adicionar novos locais, editar os existentes e visualizar uma lista dos locais cadastrados.",
    techs: ["React", "TailwindCSS", "ReacFastify", "MySQL", "Zod", "React Hook Form", "Typescript", "Axios"],
    image: leafletApp,
    github: "https://github.com/Marqu1nhosp/leafletPolygon-react-app",
    deploy: "https://leaflet-polygon-react-app.vercel.app/",
  },
  {
    title: "Back-end: API Leaflet – Gerenciamento de Estabelecimentos",
    description: "Esta é uma API construída com o framework Fastify para gerenciar estabelecimentos em um mapa Leaflet.",
    techs: ["Node.js", "Fastify", "MySQL", "Swagger/OpenAPI 3", "Zod", "Prisma", "Typescript"],
    image: apiLeaflet,
    github: "https://github.com/Marqu1nhosp/api-leafletPolygon",
    deploy: "https://example.com",
  },
  {
    title: "Pomodoro",
    description: "Foi desenvolvido com base na técnica de Pomodoro, essa técnica é forma de otimizar o tempo de estudos e tarefas geralmente é voltada para pessoas procrastinadoras, ou seja, que têm tendência a adiar suas atividades.",
    techs: ["React", "Styled Components"],
    image: pomodoro,
    github: "https://github.com/Marqu1nhosp/pomodoro-timer",
    deploy: "https://pomodoro-timer-self-six.vercel.app/",
  },
  {
    title: "Options On Screen",
    description: "O aplicativo tem a funcionalidade de encontrar aleatoriamente um filme para o usuário assistir. Ele também inclui a opção de alternar entre temas claro e escuro.",
    techs: ["React", "TailwindCSS", "Radix", "NextJS", "API The Movie Database"],
    image: optionsOnScreen,
    github: "https://github.com/Marqu1nhosp/options-on-screen-app",
    deploy: "https://options-on-screen-app.vercel.app/",
  },
  {
    title: "Notes App",
    description: "Esse app permite aos usuários gravar notas por voz, simplificando ainda mais o processo de captura de pensamentos e ideias ou por entrada do teclado, utilizando apenas texto.",
    techs: ["React", "TailwindCSS", "Radix", "API Speech Recognition"],
    image: notes,
    github: "https://github.com/Marqu1nhosp/notes-app",
    deploy: "https://example.com",
  },
  {
    title: "Pix Generator App",
    description:
      "Este é projeto full stack, com uma interface simples e intuitiva, meu aplicativo possibilita que os comerciantes se registrem, acessem suas contas e gerem QR Codes Pix de maneira ágil e eficaz. Além disso, oferecemos relatórios de transações simplificados para facilitar a gestão financeira.",
    techs: ["Node.js", "Fastify", "PostgreSQL", "NextJS", "TailwindCSS", "React", "Next Auth", "Zod", "Prisma", "Typescript"],
    image: pixGenerator,
    github: "https://github.com/Marqu1nhosp/pix-generator-app",
    deploy: "https://example.com",
  },
  {
    title: "Lista de Tarefas",
    description:
      "Uma lista de tarefas é uma lista que contém o que você precisa concluir. Com ela, tudo fica anotado em um só lugar para você não esquecer de nada importante. O aplicativo oferece uma interface intuitiva para adicionar, visualizar e excluir tarefas. As tarefas podem ser marcadas como concluídas, proporcionando uma maneira eficaz de rastrear o progresso.",
    techs: ["NextJS", "TailwindCSS", "React", "Zod", "ContextAPI", "React Hook Form"],
    image: todolist,
    github: "https://github.com/Marqu1nhosp/to-do-list-app",
    deploy: "https://example.com",
  },
  {
    title: "DT Money",
    description:
      "DT Money é um app para ter um controle financeiro, onde você pode fazer uma busca pelo o item desejado.",
    techs: ["NextJS", "TailwindCSS", "React", "Zod", "ContextAPI", "React Hook Form"],
    image: dtMoney,
    github: "https://github.com/Marqu1nhosp/dt-money",
    deploy: "https://example.com",
  },

];

const allTechs = [...new Set(projects.flatMap((p) => p.techs))];

const ProjectsSection = () => {
  const ref = useScrollReveal();
  const [filter, setFilter] = useState<string | null>(null);

  const filtered = filter
    ? projects.filter((p) => p.techs.includes(filter))
    : projects;

  return (
    <section id="projetos" className="section-padding">
      <div ref={ref} className="section-container">
        <h2 className="text-3xl md:text-4xl font-bold mb-2">
          Meus <span className="gradient-text">Projetos</span>
        </h2>
        <div className="w-16 h-1 bg-primary rounded-full mb-8" />

        {/* Filters */}
        <div className="flex flex-wrap gap-2 mb-10">
          <button
            onClick={() => setFilter(null)}
            className={`tech-badge cursor-pointer ${!filter ? "bg-primary/20 text-primary" : ""
              }`}
          >
            Todos
          </button>
          {allTechs.map((tech) => (
            <button
              key={tech}
              onClick={() => setFilter(tech)}
              className={`tech-badge cursor-pointer ${filter === tech ? "bg-primary/20 text-primary" : ""
                }`}
            >
              {tech}
            </button>
          ))}
        </div>

        {/* Project Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((project) => (
            <div
              key={project.title}
              className="glass-card overflow-hidden group hover:border-primary/30 transition-all duration-300"
            >
              <div className="relative overflow-hidden h-32 sm:h-40 md:h-48">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent opacity-60" />
              </div>

              <div className="p-6">
                <h3 className="text-lg font-bold mb-2">{project.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-1.5 mb-5">
                  {project.techs.map((t) => (
                    <span
                      key={t}
                      className="text-xs px-2 py-1 rounded-md bg-secondary text-secondary-foreground"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Github size={16} /> Código
                  </a>
                  <a
                    href={project.deploy}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    <ExternalLink size={16} /> Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
