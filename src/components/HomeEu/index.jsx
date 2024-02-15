export function HomeEu() {
  return (
    <div className="md:flex justify-center items-center md:w-[60rem] mr-10 sm:mr-20">
      <div className="md:mt-6">
        <h1 className="text-[#64ffda] mt-1 font-roboto font-bold hover object-center md:text-5xl">
          {' '}
          Olá, meu nome é Marcos Porto!
        </h1>
        <p className="text-[#ccd6f6] md:text-2xl uppercase md:font-medium italic">
          Web Developer Full Stack
        </p>
        <p className="md:text-2xl text-[#64ffda] italic mt-10 font-roboto ">
          Este é meu Website e Portfólio.
        </p>
        <p className="md:text-lg text-white font-roboto text-justify mr-3">
          Atualmente estou em busca de uma oportunidade de crescer e agregar na
          área de desenvolvimento Full-Stack, unindo qualidade, eficácia e muito
          amor pelo que faço para que assim eu possa entregar os melhores
          resultados sem deixar de lado minha evolução como profissional.
          Dedico-me ao estudo das mais recentes tecnologias, incluindo ReactJS,
          TypeScript, NextJS, Tailwind CSS, Fastify, ExpressJS e NodeJS.
        </p>
        <hr className="mt-5 max-w-xs opacity-70"></hr>
        <div className="mt-5">
          <box-icon
            size="lg"
            color="#007acc"
            type="logo"
            name="typescript"
          ></box-icon>
          <box-icon
            size="lg"
            color="#61DBFB"
            type="logo"
            name="react"
          ></box-icon>
          <box-icon
            size="lg"
            color="green"
            name="nodejs"
            type="logo"
          ></box-icon>
          <box-icon
            size="lg"
            color="#FFA500"
            type="logo"
            name="css3"
          ></box-icon>
          <box-icon
            size="lg"
            color="#61DBFB"
            type="logo"
            name="tailwind-css"
          ></box-icon>
          <box-icon
            size="lg"
            color="#FFA500"
            name="html5"
            type="logo"
          ></box-icon>
        </div>
      </div>
    </div>
  )
}
