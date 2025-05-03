// eslint-disable-next-line prettier/prettier
import { TechIcon } from "../../TechIcons";
export function Tech() {
  return (
    <>
      <h1
        id="tech"
        className="text-[#64ffda] mt-10 font-roboto font-bold uppercase object-center text-center md:text-3xl"
      >
        Tecnologias e Ferramentas
      </h1>
      <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-[#112240] p-4 rounded-2xl shadow-md">
          <h2 className="text-center text-[#64ffda] font-semibold mb-3">
            Front-end
          </h2>
          <div className="flex flex-wrap gap-4 text-6xl ">
            <TechIcon
              name="devicon-html5-plain-wordmark colored"
              label="HTML5"
            />
            <TechIcon name="devicon-css3-plain-wordmark colored" label="CSS" />
            <TechIcon
              name="devicon-javascript-plain colored"
              label="JavaScript"
            />
            <TechIcon
              name="devicon-typescript-plain colored"
              label="TypeScript"
            />
            <TechIcon name="devicon-react-original colored" label="ReactJS" />
            <TechIcon
              name="devicon-tailwindcss-original colored"
              label="Tailwind CSS"
            />
            <TechIcon
              name="devicon-nextjs-original-wordmark colored"
              label="Next.js"
            />
          </div>
        </div>

        <div className="bg-[#112240] p-4 rounded-2xl shadow-md">
          <h2 className="text-center text-[#64ffda] text-xl font-semibold mb-3">
            Back-end
          </h2>
          <div className="flex flex-wrap gap-4 text-6xl">
            <TechIcon
              name="devicon-nodejs-plain-wordmark colored"
              label="Node.js"
              color="green"
            />
            <TechIcon
              name="devicon-spring-original-wordmark colored"
              label="Spring Boot"
            />
            <TechIcon
              name="devicon-express-original-wordmark colored"
              label="Express"
            />
            <TechIcon
              name="devicon-fastify-plain-wordmark colored"
              label="Fastify"
            />
            <TechIcon
              name="devicon-postgresql-plain colored"
              label="Postgresql"
            />
            <TechIcon
              name="devicon-mysql-plain-wordmark colored"
              label="MySql"
            />
          </div>
        </div>
        <div className="bg-[#112240] p-4 rounded-2xl shadow-md">
          <h2 className="text-center text-[#64ffda] text-xl font-semibold mb-3">
            Ferramentas
          </h2>
          <div className="flex flex-wrap gap-4 text-6xl">
            <TechIcon
              name="devicon-docker-plain-wordmark colored"
              label="Docker"
            />
            <TechIcon name="devicon-git-plain-wordmark colored" label="Git" />
            <TechIcon
              name="devicon-vscode-plain-wordmark colored"
              label="VSCODE"
            />
          </div>
        </div>
      </div>
    </>
    // eslint-disable-next-line prettier/prettier
  );
}
